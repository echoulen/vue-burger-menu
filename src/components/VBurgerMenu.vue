<template>
  <div class="v-burger-menu-container-wrapper">
    <div :class='statusClass' :style='widthStyle'>
      <div class='v-burger-menu-wrapper' v-if='isOpen' @click.stop.prevent='$emit("onClose")'/>
      <template v-if='position === "right"'>
        <div class='v-burger-menu-child'>
          <slot name="content"/>
        </div>
        <div class='v-burger-menu-content'>
          <slot name='menu'/>
        </div>
      </template>
      <template v-else>
        <div class='v-burger-menu-content'>
          <slot name='menu'/>
        </div>
        <div class='v-burger-menu-child'>
          <slot name="content"/>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
function getWidthStyle(position: 'left' | 'right', width: number) {
  const openLeft = position === 'right' ? `-${width}px` : '0px';
  const closeLeft = position === 'right' ? '0px' : `-${width}px`;
  return {
    '--width': `${width}px`,
    '--openLeft': openLeft,
    '--closeLeft': closeLeft,
    'width': `calc(100% + ${width}px)`,
  };
}

export default {
  name: 'VBurgerMenu',
  props: ({
    isOpen: Boolean as () => boolean,
    width: Number as () => number,
    position: String as () => 'left' | 'right',
  }),
  data() {
    const statusClass = this.isOpen ? 'v-burger-menu-container default-open' : 'v-burger-menu-container';
    const widthStyle = getWidthStyle(this.position, this.width);
    return {
      statusClass,
      widthStyle,
      displayMenu: this.isOpen,
      isProcessing: false,
    };
  },
  methods: {
    open() {
      this.displayMenu = true;
      this.isProcessing = true;
      this.statusClass = 'active v-burger-menu-container';
      setTimeout(() => this.isProcessing = false, 400);
    },
    close() {
      this.statusClass = 'in-active v-burger-menu-container';
      this.isProcessing = true;
      setTimeout(() => {
        this.displayMenu = false;
        this.isProcessing = false;
      }, 400);
    },
  },
  watch: {
    isOpen: {
      handler(newValue) {
        if (this.isProcessing) {
          return;
        }

        newValue ? this.open() : this.close();
      },
    },
    width: {
      handler(newValue: number) {
        this.widthStyle = getWidthStyle(this.position, newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  .v-burger-menu-container-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .v-burger-menu-container {
    position: relative;
    height: 100%;
    display: flex;
    top: 0;
    left: var(--closeLeft);

    &.default-open {
      left: var(--openLeft);
    }
    &.in-active {
      animation: closeMenu .4s;
    }
    &.active {
      left: var(--openLeft);
      animation: openMenu .4s;
    }
  }

  .v-burger-menu-child {
    width: 100%;
  }
  .v-burger-menu-wrapper {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .v-burger-menu-content {
    width: var(--width);
  }

  @keyframes openMenu {
    from {left: var(--closeLeft);}
    to {left: var(--openLeft);}
  }

  @keyframes closeMenu {
    from {left: var(--openLeft);}
    to {left: var(--closeLeft);}
  }
</style>
