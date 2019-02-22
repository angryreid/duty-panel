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
        <Table :columns="monthColumns" :border="true" :data="monthData" disabled-hover></Table>
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
              h("DutyItem", {
                props: {
                  day: params.row.oneDay1,
                  list: params.row.day1,
                  type: "dot",
                  color: "primary"
                }
              })
            ]);
          }
        },
        {
          title: "周二",
          key: "day2",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("DutyItem", {
                props: {
                  day: params.row.oneDay2,
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
              })
            ]);
          }
        },
        {
          title: "周三",
          key: "day3",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("DutyItem", {
                props: {
                  day: params.row.oneDay3,
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
              })
            ]);
          }
        },
        {
          title: "周四",
          key: "day4",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("DutyItem", {
                props: {
                  day: params.row.oneDay4,
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
              })
            ]);
          }
        },
        {
          title: "周五",
          key: "day5",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("DutyItem", {
                props: {
                  day: params.row.oneDay5,
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
              })
            ]);
          }
        },
        {
          title: "周六",
          key: "day6",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("DutyItem", {
                props: {
                  day: params.row.oneDay6,
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
              })
            ]);
          }
        },
        {
          title: "周日",
          key: "day7",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("DutyItem", {
                props: {
                  day: params.row.oneDay7,
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
              })
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
          this.month.getMonth()
        );
      let num = 0;
      // 日历显示行数
      if ((dayNum + firstOfWeek - 1) % 7 === 0) {
        num = (dayNum + firstOfWeek - 1) / 7;
      } else {
        num = parseInt((dayNum + firstOfWeek - 1) / 7 + 1);
      }
      for (let i = 0; i < num; i++) {
        dutyArr[i] = {};
        for (let j = 0; j < 8; j++) {
          let oneDay = i * 8 + j - firstOfWeek + 1;
          oneDay = i > 0 ? oneDay - i : oneDay;
          if (i === num - 1) {
            // 判断最后一行显示多少数据
            if (j > (dayNum + firstOfWeek - 1 + num - 1) % 8) {
              break;
            }
          }
          // 班次信息填充
          if (j === 0) {
            dutyArr[i]["shift"] = "test_" + i;
            continue;
          }
          // 值班信息填充
          if (i === 0 && j < firstOfWeek) {
            dutyArr[i]["day" + j] = [];
          } else {
            // 值班数据绑定
            dutyArr[i]["day" + j] = ["123", "hello world", "test"];
            dutyArr[i]["oneDay" + j] = oneDay;
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
