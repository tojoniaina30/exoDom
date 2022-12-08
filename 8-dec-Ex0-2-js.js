const articles = [{
    title:"Best 3pts shoot ever",
    Image:{src:"https://nypost.com/wp-content/uploads/sites/2/2021/12/steph-curry-nba-3-point-record-2.jpg?quality=90&strip=all", alt:""},
    description:"The shoot when Stephen Curry pass Ray Allen to take must 3points",
    url:"https://youtu.be/IpSLadH6sNA",
    class: "wrap__left"
},{
    title:"Best mi-range ever",
    Image:{src:"https://cloudfront-us-east-1.images.arcpublishing.com/tronc/PSNDW4HUIRFIVDRTC5C6N7HWTM.jpg", alt:""},
    description:"The last shoot of Michael Jordan for him 6st championship",
    url:"https://youtu.be/MlzL6bT1C2U",
    class: "wrap__center"
},{
    title:"Best dunk ever",
    Image:{src:"https://e0.365dm.com/21/03/2048x1152/skysports-nba-all-star-dunk-contest_5296335.jpg", alt:""},
    description:"Aaron gordon on the All-stars Dunk Contest 2016",
    url:"https://youtu.be/5Q6n5NE6Cb4",
    class: "wrap__right"
}]


    const $warp = document.createElement("div")
    $warp.classList.add("wrap");

        for(var i = 0; i <= articles.length; i++) {

        const $wrapLeft = document.createElement("div")
        $wrapLeft.classList.add(articles[i].class);

            const $img = document.createElement("img")
            $img.src = articles[i].Image.src,
            $wrapLeft.append($img);

            const $h1 = document.createElement("h1")
            $h1.textContent  = articles[i].title
            $wrapLeft.append($h1);

            const $p = document.createElement("p")
            $p.textContent = articles[i].description
            $wrapLeft.append($p);

            const $a = document.createElement("a")
            $a.textContent = "Voir plus";
            $a.href = articles[i].url
            $wrapLeft.append($a);

        $warp.append($wrapLeft);
        
    document.body.append($warp);
}

        /* const $cardHead = document.createElement("div")
                        $cardHead.classList.add("card__head");

                                        const $h2 = document.createElement("h2")
                                        $h2.textContent = "Article 1"
                                        $cardHead.append($h2);

                        $div.append($cardHead);

                        const $cardBody = document.createElement("div")
                        $cardBody.classList.add("card__body");

                            const $img = document.createElement("img")
                            $img.src = "https://ih1.redbubble.net/image.3070001373.2587/pp,840x830-pad,1000x1000,f8f8f8.jpg"
                            $img.alt = "alt"
                            $cardBody.append($img);

                            const $p = document.createElement("p")
                            $p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quam nisi omnis obcaecati animi, quod magni repellat ex quae, quibusdam consequuntur impedit doloribus, eos sapiente possimus! Dignissimos vero pariatur enim!"
                            $cardBody.append($p)

                            const $a = document.createElement("a")
                            $a.textContent = "Voir plus"
                            $a.href = "#"
                            $a.title = " "
                            $cardBody.append($a)

                        $div.append($cardBody); */