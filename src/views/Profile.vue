<template>
  <div class="h-screen w-screen bg-[#00000c] p-4">
    <main class="m-auto flex w-[23.4375rem] flex-col rounded-xl bg-white p-6">
      <AvatarInfo />
      <Divider class="mb-4" />
      <Title title="CONTA" />
      <ProfileItems icon="ph-user-circle" text="Dados pessoais" />
      <ProfileItems icon="ph-key" text="Informações de login" />
      <Divider class="my-4" />
      <Title title="Preferências" />
      <ProfileItems icon="ph-bell" text="Notificações" />
      <ProfileItems icon="ph-person-arms-spread" text="Acessibilidade" />
      <Divider class="my-4" />
      <Title title="privacidade" />
      <ProfileItems icon="ph-devices" text="Aparelhos conectados" />
      <ProfileItems icon="ph-user-switch" text="Contas vinculadas" />
      <Divider class="my-4" />
      <ProfileItems icon="ph-question" :show-caret="false" text="Central de Ajuda" />
      <ProfileItems icon="ph-sign-out" :show-caret="false" :is-red="true" text="Sair" />
    </main>
  </div>
</template>
<script setup lang="ts">
import Divider from '@/components/partials/Divider.vue'
import AvatarInfo from '@/components/partials/AvatarInfo.vue'
import Title from '@/components/partials/Title.vue'
import ProfileItems from '@/components/partials/ProfileItems.vue'
defineOptions({
  name: 'Profile'
})
</script>
