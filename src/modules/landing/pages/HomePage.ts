import {
  defineComponent,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
} from 'vue';

export default defineComponent({
  setup: () => {
    console.log('setup'); // El setup tambien forma parte del ciclo de vida, se ejecuta antes de onMounted

    onMounted(() => {
      console.log('onMounted'); // Se ejecuta cuando el componente es montado
    });
    onUpdated(() => {
      console.log('onUpdated'); // Se ejecuta cuando el componente es actualizado
    });
    onUnmounted(() => {
      console.log('onUnmounted'); // Se ejecuta cuando el componente es destruido
    });
    onBeforeMount(() => {
      console.log('onBeforeMount'); // Se ejecuta antes de montar el componente
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate'); // Se ejecuta antes de actualizar el componente
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount'); // Se ejecuta antes de destruir el componente
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured'); // Se ejecuta cuando se captura un error
    });
    onRenderTracked(() => {
      console.log('onRenderTracked'); // Se ejecuta cuando se rastrea el renderizado
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered'); // Se ejecuta cuando se dispara el renderizado
    });
    onActivated(() => {
      console.log('onActivated'); // Se ejecuta cuando el componente es activado
    });
    onDeactivated(() => {
      console.log('onDeactivated'); // Se ejecuta cuando el componente es desactivado
    });
  },
});
