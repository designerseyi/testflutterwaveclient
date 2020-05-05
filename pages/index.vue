<template>
  <div class="hero is-fullheight">

     
        <div class="hero-body">
           
               <div class="is-overlay mt-5   is-centered is-vcentered">
                 
                    <div class="section"> 
                                
                            <h3 class="title is-size-3-mobile is-1 has-text-primary is-marginless  has-text-centered ">Card Details</h3>
                             <!-- <h3 class="content mt-2 is-size-6-mobile is-4 has-text-dark is-marginless  has-text-centered ">After this no more Forms 😊 !!! </h3> -->
                               <button class="button " @click="loadModal">Load Modal</button>
                             <div v-if="error" class="notification is-primary">
                                {{error}}
                              </div>
                             <div class="columns  is-centered is-vcentered">
                                    <div class="column is-4 " style="margin: 34px 0px;">
                                        <div v-if="isOtp">
                                              <p> Flutter wave processing Fee : {{this.payResult.appfee}}</p>
                                                    <b-field 
                                                        class="mb-4" 
                                                        label-position="on-border"
                                                        label="Otp Code">
                                                    
                                                        <b-input 
                                                                v-model="otp" 
                                                                type="number" 
                                                                 
                                                                maxlength="8"
                                                        >
                                                        
                                                        </b-input>
                                                        <!-- <small class="is-primary" v-if="cardErrors.cardNumber">{{ cardErrors.cardNumber }}</small> -->
                                                </b-field>

                                                <b-button @click="chargeOtp"  expanded class="is-primary">Proceed</b-button>
                                        </div>

                                        <div v-else>
                                           <b-switch v-model="isEscrow">
                                                      {{ isEscrow}}
                                                  </b-switch>
                                            <b-field :type="{'is-danger':cardErrors.cardNumber}"
                                                        :message="{ 'Invalid Card Number':cardErrors.cardNumber}"
                                                        class="mb-4" 
                                                        label-position="on-border"
                                                         label="Card  number">
                                                <!-- <img class="image is-24x24" src="/google.png"> -->
                                                <b-input  ref="cardNumInput" 
                                                        @blur="validateCardNumber"
                                                        :data-error="(cardErrors.cardNumber)?true:false"
                                                        v-model="cardNumber" 
                                                        type="tel" 
                                                        placeholder="#### #### #### ####" 
                                                        v-cardformat:formatCardNumber>
                                                   
                                                </b-input>
                                                 <!-- <small class="is-primary" v-if="cardErrors.cardNumber">{{ cardErrors.cardNumber }}</small> -->
                                            </b-field>

                                        
                                             <b-field
                                                    :type="{'is-danger':cardErrors.cardExpiry}"
                                                    :message="{ 'Invalid Expiration Date':cardErrors.cardExpiry}" 
                                                    label="Card Expiration:" label-position="on-border">
                                            {{cardExpiry}}


                                                        <b-input
                                                              class="mt-2" 
                                                              v-model="expirymonth"
                                                              
                                                        >
                                                        </b-input>

                                                         <b-input
                                                              class="mt-2" 
                                                              v-model="expiryyear"
                                                              
                                                        >
                                                        </b-input>
                                                  
                                                    
                           
                                                        <b-field   
                                                        :type="{'is-danger':cardErrors.cardCvc}"
                                                              :message="{ 'Invalid CVC':cardErrors.cardCvc}" 
                                                               label="Card Cvv" label-position="on-border">
                                                
                                                               <b-input ref="cardCvcInput" 
                                                                    class="mt-2" 
                                                                    
                                                                    maxlength="3" 
                                                                    :data-error="(cardErrors.cardCvc)?true:false" 
                                                                    v-model="cardCvc" 
                                                                    v-cardformat:formatCardCVC>
                                                             </b-input>
                                                             
                                                             
                                                        </b-field>
                                                      
                                                   
                                                </b-field>

                                         
                                         <!-- <b-field label="Card Pin" label-position="on-border">
                                        
                                                <b-input  maxlength="4" required  validation-message="Card Pin is required"   v-model="cardPin" >
                                                </b-input>
                                                
                                        </b-field> -->

                                        <button type="button" class="btn btn-primary" @click="validate">Validate Card Details</button>
                                        <b-button @click="pay"  expanded class="is-primary">Pay</b-button>

                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item px-1">Card Brand: <span v-if="!cardBrand" style="color: #ccc;">(awating input...)</span><code v-if="cardBrand" class="px-2">{{ cardBrand }}</code></li>
                                            <li class="list-group-item px-1">Brand Classname: <code class="px-2">{{ cardBrandClass }}</code></li>
                                            <li class="list-group-item px-1">Number: <code class="px-2">{{ cardNumber }}</code></li>
                                            <li class="list-group-item px-1">Expiration: <code class="px-2">{{ cardExpiry }}</code></li>
                                        </ul>
                                        </div>

                                      
                                    </div>
                        
                                <!-- <p class=" has-text-centered title is-6 is-size-7-mobile  fadedgray" >🍔 Your favorite food delivered at yout door step...</p> -->
   
                            </div>
                    </div>
                
                     
                </div>   
                
          
        </div>

        
       <!-- <iframe width="560" height="315"  src="" frameborder="0" allowfullscreen></iframe> -->

         <b-modal
          :active.sync="isComponentModalActive"
          has-modal-card
          trap-focus
          aria-role="dialog"
          aria-modal
        >

         <div class="modal-card" style="width:500px;height:800px">
         

          <section class="modal-card-body">
         
                    
                   <iframe style="height:100vh; width:100vw" :src="src" frameborder="0" allowfullscreen></iframe>
                <!-- <vue-friendly-iframe style="width:100%;heigth:100% " src="https://coreflutterwaveprod.com/flwmpgs/trxauth?hid=FLWe736a87e2e90459a9b9c74553091b1ef"></vue-friendly-iframe> -->
          </section>

       
        </div>
            
        
    </b-modal>
  </div>
 
</template>

<script>
import Vue from 'vue'
import gql from 'graphql-tag'
import lodash from 'lodash'
import {mapState}  from 'vuex'
export const GET_VENDOR_BANKDETAILS = gql`
 query getVendorBankDetails($ownerid:String){
  	getVendorBankDetails(ownerid:$ownerid){
    sub_account_id
  }
}`


export const ACCREDITED_PAY = {

                    "cardno": '',
                    "cvv": '',
                    "expirymonth": '',
                    "expiryyear": '',
                    "currency": "NGN",
                    "country": "NG",
                    "amount": '',
                    // "pin": '',    
                    // "suggested_auth": "PIN",
                    "email": "",
                    "phonenumber": "",
                    "firstname": "",
                    "lastname": "",
                    "subaccounts": [],
                    "txRef": "MYS-" + Date.now(),
}


export const ESCROW_PAY = {

                    "cardno": '',
                    "cvv": '',
                    "expirymonth": '',
                    "expiryyear": '',
                    "currency": "NGN",
                    "country": "NG",
                    "amount": '',
                    // "pin": '',    
                    // "suggested_auth": "PIN",
                    "email": "",
                    "phonenumber": "",
                    "firstname": "",
                    "lastname": "",
                    "subaccounts": [],
                     "meta": [{metaname: "rave_escrow_tx", metavalue: 1}],
                    "txRef": "MYS-" + Date.now(),
                    "redirect_url": "https://testflutterwaveclient.com",

  
}


export default {

  

  beforeMount(){
 
  },

    data(){
        return{

                error:'',
                isOtp:false,
                isComponentModalActive:false,
                payResult:null,
                vendorSubaccount: {
                   id: ""
                             },
                src:'https://www.w3schools.com',
                expiryyear:'22',
                expirymonth:'09',
                 $cardFormat: Vue.prototype.$cardFormat,
                // cardNumber: '5531886652142950',
                cardNumber: '5369020000812240',
                cardExpiry: null,
                otp:'',
                isEscrow:true,
                // cardPin:'3310',
                  cardPin:'8364',
                // cardCvc: '564',
                cardCvc: '192',
                cardPostal: null,
                cardErrors: {},
                // declaring card-brand in data{} enables card brand name/classes.
                cardBrand: null,
           
            
           
        }
    },

    computed: {
      
        cardBrandClass(){
          return this.getBrandClass(this.cardBrand);
        }
      },
     watch: {
        // handle auto-focus to next field
        // Note: since CVC can be 3 OR 4 digits we don't watch it
        // cardNumber: function(val){
        //   if(this.$cardFormat.validateCardNumber(val)){
        //     this.$refs.cardExpInput.focus();
        //   }
        // },
        // cardExpiry: function (val) {
        //   if (this.$cardFormat.validateCardExpiry(val)) {
        //     this.$refs.cardCvcInput.focus();
        //   }
        // }
      },

    mounted(){
        console.log(Vue.prototype);
        
        // this.$refs.cardNumInput.focus();
      } ,
    methods:{

      loadModal(){
          this.isComponentModalActive =true
      },

        validateCardNumber(){
              if(!this.$cardFormat.validateCardNumber(this.cardNumber)){
            this.cardErrors.cardNumber = "Invalid Credit Card Number.";
          };

        },
     

          validate: function(){

                // init
                this.cardErrors = {};
                
                // validate card number
                if(!this.$cardFormat.validateCardNumber(this.cardNumber)){
                    this.cardErrors.cardNumber = "Invalid Credit Card Number.";
                };

                // validate card expiry
                if (!this.$cardFormat.validateCardExpiry(this.cardExpiry)) {
                    this.cardErrors.cardExpiry = "Invalid Expiration Date.";
                };

                // validate card CVC
                if (!this.$cardFormat.validateCardCVC(this.cardCvc)) {
                    this.cardErrors.cardCvc = "Invalid CVC.";
                };

        },
        reset: function(){
          this.cardErrors = {};
          this.cardNumber = null;
          this.cardExpiry = null;
          this.cardCvc = null;
          this.cardPostal = null;
          this.$refs.cardNumInput.focus();
        },
        prefill: function(ccNum){
          this.cardNumber = ccNum;
          this.$cardFormat.setCardType({
            currentTarget : this.$refs.cardNumInput,
            value: ccNum
          });
        },
        getBrandClass: function (brand) {
          let icon = '';
          brand = brand || 'unknown';
          let cardBrandToClass = {
            'visa': 'fab fa-cc-visa',
            'mastercard': 'fab fa-cc-mastercard',
            'amex': 'fab fa-cc-amex',
            'discover': 'fab fa-cc-discover',
            'diners': 'fab fa-cc-diners-club',
            'jcb': 'fab fa-cc-jcb',
            'unknown': 'fa fa-credit-card',
          };
          if (cardBrandToClass[brand]) {
            icon = cardBrandToClass[brand];
          };

          return icon;
        },


        pay(){

           
          
          console.log('pre full order');
          
         
          

          if(this.isEscrow){

              ESCROW_PAY.cardno = this.cardNumber
              ESCROW_PAY.cvv= this.cardCvc
              ESCROW_PAY.expirymonth=this.expirymonth
              ESCROW_PAY.expiryyear = this.expiryyear
              ESCROW_PAY.amount="5600"
                 ESCROW_PAY.email= "temitopeayo01@gmail.com"
              ESCROW_PAY.phonenumber= "09090604823"
              ESCROW_PAY.firstname= "tope"
              ESCROW_PAY.lastname= "alisson"
              // ESCROW_PAY.subaccounts= ""

              console.log("Escrow pay");
              console.log(ESCROW_PAY);

               
              
            this.$axios.post('/api/payEscrow',ESCROW_PAY)
            .then((data)=>{
              console.log('full data');
              console.log(data);
              
              
                    this.payResult = data.data.data
                    console.log(this.payResult);

                    //check response.statusCode and send error to client
                  // console.log(data.data.chargeResponseCode);
                  
                  if(this.payResult != "00"){
                        if(this.payResult.chargeResponseMessage.includes("OTP")){
                           this.isOtp= true
                        }
                        // if(this.payResult.authModelUsed="PIN"){
                        //    this.isOtp= true
                        // }
                        else if(this.payResult.authModelUsed="VBVSECURECODE"){
                              this.src =this.payResult.authurl;
                              this.isComponentModalActive = true;
                           
                        }
                        else{
                          this.error =  this.payResult.chargeResponseMessage
                        }
                  }
                  else{
                        this.isOtp= true
                  }

                  
            }).catch((e)=>{
                console.log(e.response);
                   this.error = lodash.get(e, 'response.data.error.message', 'connection time out please try agian')
                // this.error = e.response.data.error
                
                
            })
              
              
          }
          else{

          }



        
        },

        chargeOtp(){

            let  Payload ={
                    transaction_reference: "", 
                    otp: ""
                };

                Payload.transaction_reference = this.payResult.flwRef
                Payload.otp = this.otp


             if(this.isEscrow){

                  
            this.$axios.post('/api/otp',Payload)
            .then((data)=>{

                  // check data befor confirm
                  //for  escrow get tx.id
                    console.log(data.data);
                  console.log(lodash.get(data, 'data.data.data.responsecode', 'connection time out please try agian'));
                  
                    if(data.data.status =='success'  &&  lodash.get(data, 'data.data.data.responsecode', '08') == "00"  ){
                    
                      
                        }
                        else{
                          console.log('status code not 00');
                          
                          console.log(data);
                          
                        }
                  
                    
                }).catch((e)=>{
                    console.log(e);
                    
                })

               }

        }

    }

}
</script>

<style>

</style>