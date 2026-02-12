#!/bin/bash

# =============================================================================
# Script de Optimización de Videos para Web
# =============================================================================
# Este script optimiza videos para uso web, generando versiones en MP4 y WebM
# con tamaños reducidos manteniendo calidad visual aceptable.
#
# Uso: ./optimize-videos.sh [archivo_video]
#   Si no se proporciona un archivo, optimiza todos los videos en public/videos/
# =============================================================================

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Directorio de videos
VIDEOS_DIR="public/videos"
BACKUP_DIR="$VIDEOS_DIR/backup_originales"

# Verificar si FFmpeg está instalado
if ! command -v ffmpeg &> /dev/null; then
    echo -e "${RED}❌ Error: FFmpeg no está instalado${NC}"
    echo "Instálalo con: brew install ffmpeg"
    exit 1
fi

echo -e "${BLUE}╔═══════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Optimizador de Videos para Web - Dentist LP    ║${NC}"
echo -e "${BLUE}╚═══════════════════════════════════════════════════╝${NC}"
echo

# Crear directorio de respaldo si no existe
if [ ! -d "$BACKUP_DIR" ]; then
    mkdir -p "$BACKUP_DIR"
    echo -e "${GREEN}✓ Directorio de respaldo creado${NC}"
fi

# Función para optimizar un video
optimize_video() {
    local input_file="$1"
    local filename=$(basename "$input_file" | sed 's/\.[^.]*$//')
    local extension="${input_file##*.}"
    local output_mp4="${VIDEOS_DIR}/${filename}-optimized.mp4"
    local output_webm="${VIDEOS_DIR}/${filename}-optimized.webm"
    
    echo -e "\n${YELLOW}📹 Procesando: ${filename}.${extension}${NC}"
    
    # Verificar si el archivo ya fue respaldado
    if [ ! -f "$BACKUP_DIR/$(basename "$input_file")" ]; then
        echo -e "${BLUE}📦 Creando respaldo...${NC}"
        cp "$input_file" "$BACKUP_DIR/"
    fi
    
    # Obtener información del video
    echo -e "${BLUE}ℹ️  Obteniendo información del video...${NC}"
    local duration=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$input_file")
    local size=$(du -h "$input_file" | cut -f1)
    echo -e "   Duración: ${duration}s | Tamaño: ${size}"
    
    # Generar MP4 optimizado (H.264)
    echo -e "\n${GREEN}🎬 Generando MP4 optimizado...${NC}"
    ffmpeg -i "$input_file" \
        -c:v libx264 \
        -crf 28 \
        -preset slow \
        -vf "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease" \
        -c:a aac \
        -b:a 128k \
        -movflags +faststart \
        "$output_mp4" \
        -y \
        -loglevel error -stats
    
    if [ $? -eq 0 ]; then
        local mp4_size=$(du -h "$output_mp4" | cut -f1)
        echo -e "${GREEN}✓ MP4 creado: ${filename}-optimized.mp4 (${mp4_size})${NC}"
    else
        echo -e "${RED}✗ Error al crear MP4${NC}"
    fi
    
    # Generar WebM optimizado (VP9)
    echo -e "\n${GREEN}🎬 Generando WebM optimizado...${NC}"
    ffmpeg -i "$output_mp4" \
        -c:v libvpx-vp9 \
        -crf 35 \
        -b:v 0 \
        -c:a libopus \
        -b:a 96k \
        "$output_webm" \
        -y \
        -loglevel error -stats
    
    if [ $? -eq 0 ]; then
        local webm_size=$(du -h "$output_webm" | cut -f1)
        echo -e "${GREEN}✓ WebM creado: ${filename}-optimized.webm (${webm_size})${NC}"
    else
        echo -e "${RED}✗ Error al crear WebM${NC}"
    fi
    
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

# Proceso principal
if [ $# -eq 1 ]; then
    # Optimizar un solo archivo
    if [ -f "$1" ]; then
        optimize_video "$1"
    else
        echo -e "${RED}❌ Error: El archivo '$1' no existe${NC}"
        exit 1
    fi
else
    # Optimizar todos los videos no optimizados
    echo -e "${YELLOW}🔍 Buscando videos para optimizar...${NC}\n"
    
    video_count=0
    for video_file in "$VIDEOS_DIR"/*.{mp4,mov,avi,mkv,webm} 2>/dev/null; do
        # Saltar archivos ya optimizados
        if [[ "$video_file" == *"-optimized."* ]]; then
            continue
        fi
        
        if [ -f "$video_file" ]; then
            optimize_video "$video_file"
            ((video_count++))
        fi
    done
    
    if [ $video_count -eq 0 ]; then
        echo -e "${YELLOW}⚠️  No se encontraron videos para optimizar${NC}"
        echo -e "   Coloca archivos de video en: ${VIDEOS_DIR}/"
    fi
fi

# Resumen final
echo -e "\n${BLUE}╔═══════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║              Optimización Completada              ║${NC}"
echo -e "${BLUE}╚═══════════════════════════════════════════════════╝${NC}"
echo -e "\n${GREEN}✓ Respaldos guardados en: ${BACKUP_DIR}/${NC}"
echo -e "${GREEN}✓ Videos optimizados listos para uso web${NC}\n"

# Mostrar comparación de tamaños
echo -e "${YELLOW}📊 Comparación de tamaños:${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

if [ -d "$BACKUP_DIR" ]; then
    original_size=$(du -sh "$BACKUP_DIR" 2>/dev/null | cut -f1)
    echo -e "Originales: ${original_size}"
fi

optimized_mp4=$(du -ch "$VIDEOS_DIR"/*-optimized.mp4 2>/dev/null | tail -1 | cut -f1)
optimized_webm=$(du -ch "$VIDEOS_DIR"/*-optimized.webm 2>/dev/null | tail -1 | cut -f1)

if [ -n "$optimized_mp4" ]; then
    echo -e "MP4 optimizados: ${optimized_mp4}"
fi

if [ -n "$optimized_webm" ]; then
    echo -e "WebM optimizados: ${optimized_webm}"
fi

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "\n${GREEN}🎉 ¡Proceso completado con éxito!${NC}\n"

# Tips
echo -e "${YELLOW}💡 Tips:${NC}"
echo -e "  • Usa WebM para navegadores modernos (mejor compresión)"
echo -e "  • Usa MP4 como fallback para compatibilidad"
echo -e "  • Los videos están optimizados a 720p máximo"
echo -e "  • Configuración: CRF 28 (MP4) / CRF 35 (WebM)"
echo
