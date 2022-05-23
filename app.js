$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://docs.google.com/spreadsheets/d/1bCKr7LaOcpU1RNBpGtz467p1X6dA17gXVzDuC-dAFSA/edit?usp=sharing",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})