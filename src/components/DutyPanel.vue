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
        <DatePicker type="month" placeholder="please select month..." v-show="type == 2" :value="month"></DatePicker>&nbsp;&nbsp;
        <Button type="primary" @click.native="serchData">查询</Button>
      </Col>
    </Row>
    <!--  每周 -->
    <Row class="mb p20" v-show="type == 1 && week == 1">
      <Col span="24">
        <Card>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            本 周 :
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
            <Icon type="ios-film-outline"></Icon>
            单 周 :
          </p>
          <Table :columns="weekColumns" :data="weekData" class="mb"></Table>
        </Card>
        <Card>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            双 周 :
          </p>
          <Table :columns="weekColumns" :data="weekData" class="mb"></Table>
        </Card>
      </Col>
    </Row>
    <!-- 月份 -->
    <Row class="mb p20" v-show="type == 2">
      <Col span="24">
        <Table :columns="monthColumns" :data="monthData" ></Table>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: "DutyPanel",
  props: {},
  data() {
    return {
      theme: "light",
      type: 1,
      week: 1,
      month: new Date(),
      weekColumns: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
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
      monthColumns:[
        {
          title: "班次",
          key: "name"
        },
        {
          title: "周一",
          key: "name"
        },
        {
          title: "周二",
          key: "name"
        },
        {
          title: "周三",
          key: "name"
        },
        {
          title: "周四",
          key: "name"
        },
        {
          title: "周五",
          key: "name"
        },
        {
          title: "周六",
          key: "name"
        },
        {
          title: "周日",
          key: "name"
        },
      ],
      monthData: []
    };
  },
  created(){
    console.log(this.month)
  },
  methods: {
    serchData(){
      console.log('search')
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
