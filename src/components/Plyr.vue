<template>
  <video ref="playerRef" :data-poster="videoInfo.thumbnail_link" v-if="videoInfo.mime_type.indexOf('video') !== -1">
    <template v-for="(item, key) in videoInfo.medias">
      <source :src="item?.link.url" :type="videoInfo.mime_type === 'video/x-matroska' ? 'video/webm' :videoInfo.mime_type" :size="list[item.resolution_name]" />
    </template>
  </video>
  <audio ref="playerRef" v-else-if="videoInfo.mime_type.indexOf('audio') !== -1">
      <source :src="videoInfo.web_content_link"  />
  </audio>
</template>
<script setup lang="ts">
import { computed, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'
  const props = defineProps<{
    video: {
      [key:string]:any
    }
  }>()
  const videoInfo = computed(() => {
    return props.video
  })
  const list:{
    [key:string]:number
  } = {
    '4K': 2160,
    '1080P': 1080,
    '720P': 720,
    '480P': 480
  }
  const playerRef = ref()
  const player = ref()
  // https://github.com/sampotts/plyr/blob/master/src/js/config/defaults.js
  const initPlayer = () => {
    player.value = new Plyr(
      playerRef.value, {
        settings: ['captions', 'quality', 'speed'],
        controls:['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
        seekTime: 10,
        speed: {
        selected: 1,
        // The options to display in the UI, if available for the source media (e.g. Vimeo and YouTube only support 0.5x-4x)
        options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
        
      },
      })
  }
  onMounted(initPlayer)
</script>

<style>
.plyr--video {
  height: 100%;
}
.plyr--audio {
  margin-top: 320px;
}
.plyr video {
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

</style>