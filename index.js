'use strict';
(function() {

    var envelope = document.getElementById("envelope");
    var envelopeTop = document.getElementById("top");
    var envelopePocket = document.getElementById("pocket");
    var card = document.getElementById("card");
    var msg2 = document.getElementById("msg2");
    var msg3 = document.getElementById("msg3")


    function openEnvelopeOnHover() {
        envelopeTop.classList.remove("close");
        envelopeTop.classList.add("open");
        pullOutPartial();
    }

    function closeEnvelopeOnHover() {
        if (flag == 1) {
            putIn();
            envelopeTop.classList.remove("open");
            envelopeTop.classList.add("close");
        }
       else {
           envelope.removeEventListener('mouseout',closeEnvelopeOnHover)
       }
    }

    function openEnvelope() {
        flag = 0;
        closeEnvelopeOnHover();
        card.classList.remove("out-partial");
        card.classList.add("pull");
        card.addEventListener("animationend",function() {
            envelopePocket.style.zIndex = 0;
            envelopeTop.style.zIndex = 0;
            card.style.zIndex = 6;
            card.classList.add("put");
            card.addEventListener("animationend", function() {
                card.style.transition = 'none';
                card.classList.remove("pull");
                card.classList.remove("put");
                card.classList.add("final");
                envelope.style.cursor = "default";
                envelopePocket.style.cursor = "pointer";
                msg3.style.color = "black";
            })
        })
        card.classList.remove("out-partial");
        envelope.removeEventListener("click", openEnvelope);
        card.addEventListener("click", turnCard);
        envelopePocket.addEventListener("click", turnCard);

    }

    function pullOutPartial() {
        card.classList.remove("in");
        card.classList.add("out-partial");
    }

    function putIn() {
        card.classList.remove("out-partial");
        card.classList.add("in");
    }

    function turnCard() {
        if (card.classList.contains("active")) {
            card.classList.remove("active");
        }
        else {
            card.classList.add("active");
        }
    }

    var flag = 1;
    envelopeTop.classList.add("close");

    envelope.addEventListener('mouseover',openEnvelopeOnHover);
    envelope.addEventListener('mouseout',closeEnvelopeOnHover);
    envelope.addEventListener('click', openEnvelope);
    card.addEventListener('click', turnCard);

})();
