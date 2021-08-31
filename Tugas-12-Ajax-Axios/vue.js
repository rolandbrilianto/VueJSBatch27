const vm = new Vue({
  el: "#app",

  data: {
    name: "",
    address: "",
    no_hp: "",
    photoDomain: "http://demo-api-vue.sanbercloud.com",
    errors: [],
    statusTombol: "Submit",
    members: [],
    editMemberId: null,
    uploadFotoId: null,
  },
  methods: {
    validation: function () {
      this.errors = [];

      if (this.name.length <= 6) {
        this.errors.push("Masukan Nama Lengkap Anda");
        this.$refs.name.focus();
      }
      if (this.address.length < 30) {
        this.errors.push("Masukan Alamat Lengkap Anda");
        this.$refs.address.focus();
      }

      if (this.no_hp.length > 12 || this.no_hp.length < 8) {
        this.errors.push("Nomor telepon anda salah / tidak sesuai format");
        this.$refs.no_hp.focus();
      }
    },

    submitForm: function () {
      this.validation();

      if (this.errors.length === 0) {
        let formData = new FormData();
        formData.append("name", this.name);
        formData.append("address", this.address);
        formData.append("no_hp", this.no_hp);

        const config = {
          method: "post",
          url: "http://demo-api-vue.sanbercloud.com/api/member",
          data: formData,
        };

        axios(config)
          .then((response) => {
            this.viewMembers();
            this.clearForm();
            alert(response.data.message);
          })
          .catch((error) => {
            alert(error);
          });
        alert("Terimakasih anda telah mengisi data dengan benar");
      }
    },
    clearForm: function () {
      this.name = "";
      this.address = "";
      this.no_hp = "";
      this.buttonStatus = "Submit";
      this.editMemberId = null;
      this.uploadFotoId = null;
    },

    viewMembers: function () {
      const config = {
        method: "get",
        url: "http://demo-api-vue.sanbercloud.com/api/member",
      };

      axios(config)
        .then((response) => {
          this.members = response.data.members;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editMember: function (member) {
      this.name = member.name;
      this.address = member.address;
      this.no_hp = member.no_hp;
      this.statusTombol = "Update";
      this.editMemberId = member.id;
    },
    uploadPhoto: function (member) {
      this.name = member.name;
      this.address = member.address;
      this.no_hp = member.no_hp;
      this.statusTombol = "Upload";
      this.uploadFotoId = member.id;
    },
    submitPhoto: function (id) {
      let file = this.$refs.photo_profile.files[0];
      let formData = new FormData();
      formData.append("photo_profile", file);
      const config = {
        method: "post",
        url: `http://demo-api-vue.sanbercloud.com/api/member/${id}/upload-photo-profile`,
        data: formData,
      };
      axios(config)
        .then((response) => {
          this.clearForm();
          this.viewMembers();
          alert(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateMember: function (id) {
      this.validation();

      if (this.errors.length === 0) {
        let formData = new FormData();
        formData.append("name", this.name);
        formData.append("address", this.address);
        formData.append("no_hp", this.no_hp);

        const config = {
          method: "post",
          url: `http://demo-api-vue.sanbercloud.com/api/member/${id}`,
          params: { _method: "PUT" },
          data: formData,
        };

        axios(config)
          .then((response) => {
            this.clearForm();
            this.viewMembers();

            alert(response.data.message);
          })
          .catch((error) => {
            alert(error);
          });
      }
    },
    deleteMember: function (id) {
      const config = {
        method: "post",
        url: `http://demo-api-vue.sanbercloud.com/api/member/${id}`,
        params: { _method: "DELETE" },
      };

      axios(config)
        .then((response) => {
          this.viewMembers();

          alert(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.viewMembers();
  },
});
