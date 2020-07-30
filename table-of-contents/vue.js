Vue.component('appVis', {
    template: `
     <div>
        <div id="mynetwork" ref="vis"></div>
     </div>
        `,
        mounted() {
            // mounted ეშვება ყოველ ჯერზე როდესაც ვუ.ჯს არენდერებს (ქმნის) ვირტუალურ DOM ამიტომ
            // როდესაც მომხმარებელი დააკლიკებს მენიუს გამოჩენა/დამალვაზე ვის.ჯს ხელახლა უნდა გამოვიძახოთ აქ
            init()
        }
});


 // ვუე.ჯს უნდა ინიცირდეს ვის.ჯს ინიცირებამდე და რადგანაც ვის.ჯს გვერდის ჩატვირთვისას არ გვჭირდება, გამოვიძახებთ მხოლოდ mounted() ციკლში.
var vm = new Vue({
    el: '#app',
    data: {
        isActive: false
    },
    methods: {
        initFun(){
            this.isActive = !this.isActive
        }
    }
  })