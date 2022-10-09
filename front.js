

    const pics = [
        "moon.jpg",
        "normal.jpg",
        "re-learning.png",
        "ucl.png",
        "space2.png",
        "th-68757234.jpg",
        "th-267546226.jpg",
        "th-1030989230.jpg",
        "th-2186808580.jpg",
        "th-3481471190.jpg",
        "th-4159691618.jpg",
        "th-4159691618.jpg",
    ];

    
    document.querySelectorAll(".images").forEach(item => {
    item.addEventListener('click',
    event => {
        var node = document.createElement("input");
        node.setAttribute("type","checkbox");
        node.setAttribute("class","check");   
       
        node.style.position ="absolute";
        node.checked = true;
        
        item.setAttribute('style','opacity:0.3');
        item.before(node);


        document.getElementById("validate")
        .addEventListener('click',event => {

        document.querySelectorAll(".check").forEach(box =>{
                document.querySelectorAll(".images").forEach(img => {
                    var i = document.createElement('img');
                        i.width = 100; i.height = 100;
                        var num = Math.floor(Math.random() * pics.length);
                        i.src = "images/"+pics[num];
                        img.replaceWith(i);
                        
                })
               box.remove();
        }
    )

    });
       
        })
    })

