<template>

  <h1>Buy My Holiday E-Commerce Platform</h1>

  <v-container>
    <v-row>
      <v-col cols="4" v-for="item in items">
        <v-card
                class="mx-auto"
                max-width="344"
        >
          <v-img
                  :src="item.pictureURL"
                  height="200px"
          ></v-img>

          <v-card-title>
            {{item.title}}
          </v-card-title>

          <v-card-subtitle>
            {{item.subtitle}}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
                    color="orange lighten-2"
                    text
            >
              Buy
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "Home",
  props: {
  },
  components: {
    //componentName: () => import('@/components/path'),
  },
  data() {
    return {
      dialog:false,
      newItem: "",
      items: [
        {
          title: "Trip to Malaysia",
          subtitle: "Truly Asia",
          pictureURL: "https://picsum.photos/seed/Malaysia1/400/200"
        },
        {
          title: "Trip to Bahamas",
          subtitle: "Your Dream Getaway",
          pictureURL: "https://picsum.photos/seed/Bahamas/400/200"
        },
        {
          title: "Trip to Japan",
          subtitle: "Land of the Rising Sun",
          pictureURL: "https://picsum.photos/seed/Japan3/400/200"
        },
        {
          title: "Trip to Italy",
          subtitle: "History Awaits",
          pictureURL: "https://picsum.photos/seed/Italy/400/200"
        },
        {
          title: "Trip to India",
          subtitle: "Culture and History",
          pictureURL: "https://picsum.photos/seed/India/400/200"
        },
        {
          title: "Trip to US",
          subtitle: "Land of Opportunity",
          pictureURL: "https://picsum.photos/seed/US/400/200"
        },
        {
          title: "Trip to Australia",
          subtitle: "Land Down Under",
          pictureURL: "https://picsum.photos/seed/Australia3/400/200"
        },
        {
          title: "Trip to Tahiti",
          subtitle: "Fancy the beach?",
          pictureURL: "https://picsum.photos/seed/Tahiti2/400/200"
        },
        {
          title: "Trip to Canada",
          subtitle: "Winter Wonderland",
          pictureURL: "https://picsum.photos/seed/Canada/400/200"
        },

      ]
    }
  },
  methods: {
    addNewItem() {
      this.todoItems.push({
        text: this.newItem,
        check: false,
      })
      this.newItem = ""
      this.dialog=false
    }
  }
}
</script>

<style>
.myactionbutton {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>