<template>
  <span :class="$style['date-picker-wrap']">
    <span :class="$style.label">{{label}}：</span>
    <el-date-picker
      :class="$style['date-picker']"
      @blur="blur"
      v-show="foc"
      ref='date'
      size="mini"
      :type="type"
      v-model="changeData"
      v-bind="elementProps"
      value-format="timestamp">
    </el-date-picker>

    <span
      :class="$style.text"
      v-if="!foc"
      @click="dateFocus()">
      {{changeDataLiteral || '请输入'}}
    </span>

    <i
      v-if="isClearable"
      @mouseover="emptyingOperation=true"
      @mouseout="emptyingOperation=false"
      @click.stop="clearable()"
      :class="{
        [$style['arrow-visible']]:foc,
        ['el-icon-arrow-down']:!emptyingOperation,
        ['el-icon-error']:emptyingOperation
      }">
    </i>
    <i v-else class="el-icon-arrow-down" :class="{[$style['arrow-visible']]:foc}"></i>
  </span>
</template>

<script>
import { isArray } from 'lib/validate';
import moment from 'moment';
import { getPropString, getPropObject, getPropBoolean } from 'lib/vue-prop';

export default {
  props: {
    checked: {},
    elementProps: getPropObject(), // element属性
    label: getPropString('时间组件'),
    type: getPropString('date'),
    format: getPropString('YYYY-MM-DD'),
    isClearable: getPropBoolean(true),
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  data() {
    return {
      foc: false,
      valueType: isArray(this.checked),
      emptyingOperation: false,
    };
  },
  computed: {
    changeData: {
      get() {
        return this.checked;
      },
      set(value) {
        this.$emit('change', value);
        return value;
      },
    },
    changeDataLiteral() {
      if (this.valueType) {
        const d = this.changeData.map((item) => moment(item).format(this.format)).join(' 至 ');
        return d;
      }
      return this.changeData ? moment(this.changeData).format(this.format) : '请选择';
    },
  },

  methods: {
    dateFocus() {
      this.foc = true;
      this.$nextTick(() => {
        this.$refs.date.focus();
      });
    },
    blur() {
      if (!this.changeData) {
        if (this.valueType) {
          this.changeData = [];
        } else {
          this.changeData = '';
        }
      }
      this.foc = false;
    },
    clearable() {
      if (this.valueType) {
        this.changeData = [];
      } else {
        this.changeData = '';
      }
    },
  },
};
</script>

<style lang="scss" module>
.date-picker-wrap{
  padding:5px 26px 5px 0;
  display: inline-block;
  .label{
    line-height: 28px;
    font-weight: bolder;
    color: #999999;
  }
  .date-picker {
    width: 150px;
  }
  .text{
    line-height: 28px;
    cursor: pointer;
  }
  i{
    padding-left: 5px;
    font-size: 16px;
    color: #9d9d9d;
    font-weight: 900;
  }
  .arrow-visible{
    color: #409eff;
  }
}

</style>
