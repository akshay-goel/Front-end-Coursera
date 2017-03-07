/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction()
{
  if(document.getElementById('same').checked==true)
    {
      var a=document.getElementById('shippingName').value;
      var b=document.getElementById('shippingZip').value
      // console.log(a);
      // console.log(b);
      document.getElementById('billingName').value=a;
      document.getElementById('billingZip').value=b;
    }
  else
    {
      document.getElementById('billingName').value="";
      document.getElementById('billingZip').value="";
    }
}