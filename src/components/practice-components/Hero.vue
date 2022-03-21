<template>
  <section
    class="form-container"
    v-bind:style="{ 'background-color': backgroundColor }"
  >
    <h1>{{ mainTitle }}</h1>
    <div class="display-content">
      <form class="second">
        <label> First name: </label>
        <input
          type="text"
          v-model="firstName"
          name="first-name"
          placeholder="Enter Your First Name"
          required
        />
        <br />
        <label> Last name: </label>
        <input
          type="text"
          v-model="lastName"
          name="last-name"
          placeholder="Enter Last name"
          required
        />
        <br />
        <label> Tel: </label>
        <input
          type="tel"
          name="phone"
          v-model="phone"
          placeholder="Enter Number"
          required
        />
        <br />
        <label> Date of birth: </label>
        <input
          type="date"
          v-model="dateOfBirth"
          name="date of birth"
          placeholder="Required"
        />
        <br />
        <label> Field of study: </label>
        <input
          type="text"
          v-model="fieldOfSudy"
          name="field"
          placeholder="Enter Field Of Study"
        /><br />
        <button>Submit</button>
      </form>

      <form class="first">
        <label> <b> First name:</b> </label>
        <input
          type="text"
          :value="firstName"
          name="first-name"
          required
          readonly
        />
        <br />
        <label> <b>Last name:</b> </label>
        <input
          type="text"
          :value="lastName"
          name="last-name"
          required
          readonly
        />
        <br />
        <label> <b>Tel:</b> </label>
        <input type="tel" :value="phone" name="phone" required readonly />
        <br />
        <label> <b>Date of birth:</b> </label>
        <input :value="dateOfBirth" type="date" name="date of birth" readonly />
        <br />
        <label><b> Field of study:</b></label>
        <input type="text" :value="fieldOfSudy" name="field" readonly /><br />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero-app",
  data() {
    return {
      firstName: "",
      mainTitle: "Registration Form",
      backgroundColor: "orange",
    };
  },
  methods: {
    handleSubmit(x) {
      x.preventDefault();
      this.mainTitle = "Form has been submitted.No changes can be made";
      this.backgroundColor = "green";
    },
  },
};
</script>

<style scoped>
.first,
.second {
  display: inline-block;
  justify-content: space-between;
  padding: 50px;
  background-color: white;
  width: 30%;
}
.first {
  padding-top: 0px;
  width: 31%;
}
.display-content {
  padding-bottom: 8px;
  border-radius: 5px;
}
.display-content {
  background-color: white;
  padding-top: 0px;
  width: auto;
}
.form-container {
  background: orange;
  display: inline-block;
  padding: 5%;
  border-radius: 5px;
  width: 67%;
  margin-left: 10%;
  margin-right: 10%;
}
input {
  padding: 8px;
  margin: 5px;
  border-radius: 5px;
}
.first input {
  border: 2px solid white;
  cursor: not-allowed;
  background-color: black;
  color: white;
}
h1 {
  text-align: center;
  background-color: #2c3e50;
  width: 100%;
  margin-top: 0px;
  color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 50px;
  padding-top: 20px;
}
.second input:hover {
  border: 2px solid orange;
}
.second input {
  border: 2px solid black;
}
template {
  align-items: center;
}
button {
  padding: 0.5rem;
  outline: none;
  border: 1px solid black;
  border-radius: 8px;
  text-align: center;
  background: #fff;
  color: #000;
  margin-top: 5%;
}
button:hover {
  background-color: orange;
  border: 2px transparent;
  padding: 0.6rem;
}
</style>