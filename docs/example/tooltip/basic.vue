<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <f-button>top-start</f-button>
      </f-tooltip>
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <f-button>top</f-button>
      </f-tooltip>
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <f-button>top-end</f-button>
      </f-tooltip>
    </div>
    <div class="row">
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <f-button>left-start</f-button>
      </f-tooltip>
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <f-button>right-start</f-button>
      </f-tooltip>
    </div>
    <div class="row">
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <f-button class="mt-3 mb-3">left</f-button>
      </f-tooltip>
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <f-button>right</f-button>
      </f-tooltip>
    </div>
    <div class="row">
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <f-button>left-end</f-button>
      </f-tooltip>
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <f-button>right-end</f-button>
      </f-tooltip>
    </div>
    <div class="row center">
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <f-button>bottom-start</f-button>
      </f-tooltip>
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <f-button>bottom</f-button>
      </f-tooltip>
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <f-button>bottom-end</f-button>
      </f-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  margin-top: 10px;
}
</style>
