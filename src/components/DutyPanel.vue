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
          key: "mon",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "DutyItem",
                {
                  props: {
                    day: "1",
                    list: params.row.mon,
                    type: "dot",
                    color: "primary"
                  },
                  style: {},
                  on: {
                    click: () => {
                      console.log(params.row.mon);
                    }
                  }
                },
                params.row.mon
              )
            ]);
          }
        },
        {
          title: "周二",
          key: "tues",
          align: "center"
        },
        {
          title: "周三",
          key: "wed",
          align: "center"
        },
        {
          title: "周四",
          key: "thur",
          align: "center"
        },
        {
          title: "周五",
          key: "fri",
          align: "center"
        },
        {
          title: "周六",
          key: "sat",
          align: "center"
        },
        {
          title: "周日",
          key: "sun",
          align: "center"
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
      let weekObj = {
        mon: "0",
        tues: "1",
        wed: "2",
        thur: "3",
        fri: "4",
        sat: "5",
        sun: "6"
      };
      dutyArr[0] = {
        shift: "班组1",
        mon: [1, 2],
        tues: ["班组1", "班组2"],
        wed: "3",
        thur: "4",
        fri: "5",
        sat: "6",
        sun: "7"
      };
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
