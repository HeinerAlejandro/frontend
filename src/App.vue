<template>
  <v-app>
    <v-content>
      <Header />
      <ServiceSection />
      <ProductSection />
      <RegistrationSection />
      <ButtonChatBot />
    </v-content>
  </v-app>
</template>

<script>

  import Header from './components/Header'
  import ServiceSection from './components/ServiceSection'
  import ProductSection from './components/ProductSection'
  import RegistrationSection from './components/RegistrationSection'
  import ButtonChatBot from './components/ChatBot'

  export default {
    name: 'App',
    components: {
      Header,
      ServiceSection,
      ProductSection,
      RegistrationSection,
      ButtonChatBot
    },
    data () {
      return {
        //
      }
    }
  }
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Amaranth:400i|Anton|Pattaya|Sansita:400i');
  @import url('https://fonts.googleapis.com/css?family=Ubuntu');

  .opacity-input-form{
    background: black;
    border: none;
    opacity: 0.4;
  }
  
  .description{
      font-family: 'Ubuntu', sans-serif;
  }

  .section{
    height: 100vh;
  
  }

  .text-section{
    font-family: 'Anton', sans-serif;
  }
</style>
