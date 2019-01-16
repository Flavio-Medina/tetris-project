<template>
  <div>
    <b-table
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :items="items"
      :fields="fields"
      ref="hst"
      class="bt"
    >
      <template slot="index" slot-scope="data">
        <div id="ind">{{data.index + 1}}</div>
      </template>
      <template slot="user" slot-scope="data">
        <div id="username">{{data.item.user}}</div>
      </template>
      <template slot="lines" slot-scope="data">
        <div>{{data.item.lines}}</div>
      </template>
      <template slot="score" slot-scope="data">
        <div>{{data.item.score}}</div>
      </template>
    </b-table>
    <b-btn class="col align-self-center btn btn-primary smbtn" v-on:click="refresht">Refresh</b-btn>
  </div>
</template>

<script>
let userd = [];
let scored = [];
let linesd = [];
let items;
let fields;

export default {
  data() {
    return {
      sortBy: "score",
      sortDesc: true,
      items: items,
      user: userd,
      score: scored,
      lines: linesd,
      fields: [
        { key: "index", label: "" },
        "user",
        { key: "lines", sortable: true },
        { key: "score", sortable: true }
      ]
    };
  },
  methods: {
    refresht: function() {
      beforeCreate();
    }
  },
  beforeCreate: function() {
    /*
    Hier alles löschen (ist nur zum testen) und dein Code reinschreiben
    Die Highscore Liste sortiert schon automatisch nach Score

    userd, scored und linesd sind die Variablen (Arrays), die du brauchst (die Variablen ohne d am Ende sind nur für die Tabelle)

    Ich hoffe und glaube, dass du nicht irgendwas an b-table zu ändern muss, aber falls doch:
    https://bootstrap-vue.js.org/docs/components/table/
    */
    userd[0] = "test1";
    scored[0] = "2";
    linesd[0] = "4";
    userd[1] = "test2";
    scored[1] = "3";
    linesd[1] = "3";
    items = [
      { user: userd[0], score: scored[0], lines: linesd[0] },
      { user: userd[1], score: scored[1], lines: linesd[1] },
      { user: userd[2], score: scored[2], lines: linesd[2] },
      { user: userd[3], score: scored[3], lines: linesd[3] }
    ];
    console.log("Test");
  }
};
</script>

<style scoped>
#ind {
  width: 22px;
}

#username {
  width: 160px;
}
</style>
