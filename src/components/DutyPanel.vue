<template>
  <div class="main" @keydown.enter="serchData">
    <Menu mode="horizontal" :theme="theme" active-name="1" class="mb">
      <MenuItem name="1">
        <Icon type="ios-paper"/>值班面板
      </MenuItem>
    </Menu>
    <Row class="mb p20">
      <Col span="24">
        类型 :
        <Select v-model="type" style="width:200px;">
          <Option :value="1">周</Option>
          <Option :value="2">月</Option>
        </Select>&nbsp;&nbsp;
        日期 :
        <Select v-model="week" style="width:200px;" v-show="type == 1">
          <Option :value="1">本周</Option>
          <Option :value="2">单双周</Option>
        </Select>
        <DatePicker
          type="month"
          placeholder="please select month..."
          v-show="type == 2"
          v-model="month"
        ></DatePicker>&nbsp;&nbsp;
        <Button type="primary" @click.native="serchData">查询</Button>
      </Col>
    </Row>
    <!--  每周 -->
    <Row class="mb p20" v-show="type == 1 && week == 1">
      <Col span="24">
        <Card>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>本 周 :
          </p>
          <Table :columns="weekColumns" :data="weekData" class="mb"></Table>
        </Card>
      </Col>
    </Row>
    <!-- 单双周 -->
    <Row class="mb p20" v-show="type == 1 && week == 2">
      <Col span="24">
        <Card>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>单 周 :
          </p>
          <Table :columns="weekColumns" :border="true" :data="weekData" class="mb"></Table>
        </Card>
        <Card>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>双 周 :
          </p>
          <Table :columns="weekColumns" :border="true" :data="weekData" class="mb"></Table>
        </Card>
      </Col>
    </Row>
    <!-- 月份 -->
    <Row class="mb p20" v-show="type == 2">
      <Col span="24">
        <Table :columns="monthColumns" :border="true" :data="monthData"></Table>
      </Col>
    </Row>
  </div>
</template>
<script>
import Vue from "vue";
import DutyItem from "./DutyItem";
Vue.component(DutyItem.name, DutyItem);
export default {
  name: "DutyPanel",
  props: {},
  components: {
    // DutyItem
  },
  data() {
    return {
      theme: "light",
      type: 2,
      week: 1,
      month: new Date(),
      dutyList: ["1", "2"],
      weekColumns: [
        {
          title: "Name",
          key: "name",
          align: "center"
        },
        {
          title: "Age",
          key: "age",
          align: "center"
        },
        {
          title: "Address",
          key: "address",
          align: "center"
        }
      ],
      weekData: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ],
      monthColumns: [
        {
          title: "班次",
          key: "shift",
          align: "center"
        },
        {
          title: "周一",
          key: "day1",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "DutyItem",
                {
                  props: {
                    day: "1",
                    list: params.row.day1,
                    type: "dot",
                    color: "primary"
                  },
                  style: {},
                  on: {
                    click: () => {
                      console.log(params.row.day1);
                    }
                  }
                },
                params.row.day1
              )
            ]);
          }
        },
        {
          title: "周二",
          key: "day2",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "DutyItem",
                {
                  props: {
                    day: "1",
                    list: params.row.day2,
                    type: "dot",
                    color: "primary"
                  },
                  style: {},
                  on: {
                    click: () => {
                      console.log(params.row.day2);
                    }
                  }
                },
                params.row.day2
              )
            ]);
          }
        },
        {
          title: "周三",
          key: "day3",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "DutyItem",
                {
                  props: {
                    day: "1",
                    list: params.row.day3,
                    type: "dot",
                    color: "primary"
                  },
                  style: {},
                  on: {
                    click: () => {
                      console.log(params.row.day3);
                    }
                  }
                },
                params.row.day3
              )
            ]);
          }
        },
        {
          title: "周四",
          key: "day4",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "DutyItem",
                {
                  props: {
                    day: "1",
                    list: params.row.day4,
                    type: "dot",
                    color: "primary"
                  },
                  style: {},
                  on: {
                    click: () => {
                      console.log(params.row.day4);
                    }
                  }
                },
                params.row.day4
              )
            ]);
          }
        },
        {
          title: "周五",
          key: "day5",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "DutyItem",
                {
                  props: {
                    day: "1",
                    list: params.row.day5,
                    type: "dot",
                    color: "primary"
                  },
                  style: {},
                  on: {
                    click: () => {
                      console.log(params.row.day5);
                    }
                  }
                },
                params.row.day5
              )
            ]);
          }
        },
        {
          title: "周六",
          key: "day6",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "DutyItem",
                {
                  props: {
                    day: "1",
                    list: params.row.day6,
                    type: "dot",
                    color: "primary"
                  },
                  style: {},
                  on: {
                    click: () => {
                      console.log(params.row.day6);
                    }
                  }
                },
                params.row.day6
              )
            ]);
          }
        },
        {
          title: "周日",
          key: "day7",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "DutyItem",
                {
                  props: {
                    day: "1",
                    list: params.row.day7,
                    type: "dot",
                    color: "primary"
                  },
                  style: {},
                  on: {
                    click: () => {
                      console.log(params.row.day7);
                    }
                  }
                },
                params.row.day7
              )
            ]);
          }
        }
      ],
      monthData: []
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    serchData() {
      console.log("search...");
      this.getTableData();
    },
    // 返回某月共有多少天
    getDayNumber(year, month) {
      return new Date(year, month, 0).getDate();
    },
    // 返回某个月第一天是周几
    getFirstDayWeek(year, month) {
      let week = new Date(year, month, 1).getDay();
      return week == 0 ? 7 : week;
    },
    getTableData() {
      let dayNum = this.getDayNumber(
          this.month.getFullYear(),
          this.month.getMonth() + 1
        ),
        dutyArr = [],
        firstOfWeek = this.getFirstDayWeek(
          this.month.getFullYear(),
          this.month.getMonth() + 1
        );
      const num = ((dayNum + firstOfWeek) / 8) | (0 + 1);
      for (let i = 0; i < num; i++) {
        dutyArr[i] = {};
        for (let j = 0; j < 8; j++) {
          if (j === 0) {
            dutyArr[i]["shift"] = "test";
            continue;
          }
          if (i === 0 && j < firstOfWeek) {
            dutyArr[i]["day" + j] = [];
          } else {
            dutyArr[i]["day" + j] = [1, 2];
          }
        }
      }
      this.monthData = dutyArr;
    }
  }
};
</script>
<style scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
}
.mb {
  margin-bottom: 20px;
}
.p20 {
  padding: 0 20px;
}
</style>
