<template>
  <div class="textbody"> 
    <h2>Contact</h2> 
      <form id="contact-form"  ref="formref" action="https://axzwrsiu89.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer" method="POST"> 
        <input type="text" name="name" id="name" placeholder="Full name" required/> 
        <input type="email" name="email" id="email" placeholder="Email" /> 
        <textarea rows="6" cols="30" name="message" id="message" placeholder="Write your message here" required></textarea> 
        <input type="submit" id="submit" value="Send" @click='submit'> 
      </form> 
    <p id="form-response" ref="message"></p> 
    <p id="error-response" ref="error"></p> 
  </div>
</template>

<script>
export default {
  name: 'Contact',
  class: 'className {contact-form}',
  props: {
  },
  methods: {
    submit ()  {
      this.$refs.formref.onsubmit = e => {
        e.preventDefault();

        const data = {};
        const formElements = Array.from(this.$refs.formref);
        formElements.map(input => (data[input.name] = input.value));

        // HTTP request
        var xhr = new XMLHttpRequest();
        xhr.open(this.$refs.formref.method, this.$refs.formref.action, true);
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.send(JSON.stringify(data));

        // Callback function
        xhr.onloadend = response => {
          if (response.target.status === 200) {
            this.$refs.formref.reset();
            this.$refs.message.innerHTML = 'Your submission has been sent, I\'ll keep in touch';
          } else {
            this.refs.error.innerHTML = 'There was an error';
            console.error(JSON.parse(response.target.response).message);
          }
        };
      };
    }
  }
}
</script>
<style scoped>
  #form-response {
    text-align: center;
    padding: 0px;
    background-color: lightblue;
  }
  #error-response {
    text-align: center;
    color: rgb(235, 33, 33);
  }
</style>