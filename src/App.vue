<template>
  <v-app>
     
    <v-content>
      <notifications group="success" position = 'top center'/>
      <notifications group="errors" position = 'top center'/>
      <Header />
      <ServiceSection />
      <ProductSection />
      <PlacesSection />
      <RegistrationSection />
      <Footer />
      <ButtonChatBot />
      <ShoppingCart />
     
    </v-content>
  </v-app>
</template>

<script>
  import Header from './components/Header'
  import ServiceSection from './components/ServiceSection'
  import ProductSection from './components/ProductSection'
  import PlacesSection from './components/PlacesSection'
  import RegistrationSection from './components/RegistrationSection'
  import ButtonChatBot from './components/ChatBot'
  import ShoppingCart from './components/ShoppingCart'
  import Footer from './components/foo.vue'
  export default {
    name: 'App',
    components: {
      Header,
      ServiceSection,
      ProductSection,
      PlacesSection,
      RegistrationSection,
      ButtonChatBot,
      ShoppingCart,
      Footer
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
      margin-top: 50px;
      font-size: 4rem;
     font-family: 'Amaranth', sans-serif;
  }
  .description-section{
    font-size: 1.2rem;
  }
</style>