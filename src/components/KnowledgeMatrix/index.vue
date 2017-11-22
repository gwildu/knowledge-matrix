<template>
  <div>
    <h1>This is the knowledge matrix of {{knowledgeMatrix.meta.subject.name}}</h1>
    <section id="main">
      <table class="knowledge-matrix__table knowldege-matrix__caption" width="100%">
        <thead>
        <tr>
          <th width="14%" v-for="label, index in knowledgeMatrix.config.labels">{{label}}</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td v-for="label, index in knowledgeMatrix.config.labels">{{index}}</td>
        </tr>
        </tbody>
      </table>
      <div v-for="area in areas">
        <h2>{{area.name}}</h2>
        <table class="knowledge-matrix__table knowledge-matrix__area" width="100%" v-for="subArea in area.subAreas">
          <thead>
          <tr>
            <th colspan="7">{{subArea.name}}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in subArea.items">
            <td
              :class="{'active': (n-1 === item.rating)}"
              :width="`${Math.floor(100/numberOfRatings)}%`" v-for="n in numberOfRatings">{{n-1 === item.rating ? (n-1) : ''}}</td>
          </tr>
          </tbody>
        </table>
      </div>

    </section>
  </div>
</template>

<script>
  import knowledgeMatrix from '../../data/knowledge-matrix'

  export default {
    name: 'KnowledgeMatrix',
    data () {
      return {
        knowledgeMatrix
      }
    },
    computed: {
      labels () {
        return this.knowledgeMatrix.config.labels
      },
      numberOfRatings () {
        return this.labels.length
      },
      areas () {
        return this.knowledgeMatrix.data.areas
      },
      subject () {
        return this.knowledgeMatrix.meta.subject
      }
    }
  }
</script>
<style lang="scss">
  .knowledge-matrix {
    &__table {
      td {
        background-color: #eef;
        text-align: center;
        padding: 10px;
        &.active {
          &:nth-child(1) {
            background-color: #f00;
            color: #eef
          }
          &:nth-child(2) {
            background-color: #f50;
            color: #eef;
          }
          &:nth-child(3) {
            background-color: #fb0;
          }
          &:nth-child(4) {
            background-color: #ff0;
          }
          &:nth-child(5) {
            background-color: #bf0;
          }
          &:nth-child(6) {
            background-color: #4d0;
          }
          &:nth-child(7) {
            background-color: #0a0;
            color: #eef;
          }
        }
      }
      th {
        background-color: #778;
        color: #eef;
      }
    }
  }
</style>
