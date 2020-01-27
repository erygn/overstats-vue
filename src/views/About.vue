<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
                  color="primary"
                  dark
                  v-on="on"
          >
            Dropdown
          </v-btn>
        </template>
        <v-list>
          <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
          >
            <v-list-item-title>{{ index +1 }}. {{ item.title }} + {{ item.age }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me', age: 12 },
        { title: 'Click Me', age: 13 },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  }
</script>