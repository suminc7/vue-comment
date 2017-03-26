const express = require('express');
var router = express.Router();

router.post('/', function(req, res){
    console.dir(req.body.title);
    res.json({data: 1});
})

router.get('/list', function(req, res){

    res.json({
        comments: [
            {
                id: 7,
                userId: 1169,
                myCommentYn: "N",
                nickname: "VRMAN",
                profilePath: "https://content.epiqvr.com/prod/user_thumbnail/KM8YNvmueambAHPac7Pgv59VlqS2H909M3B0EvE6pqM%3D/vSPs_1p3g94FKLYEYDgndA%3D%3D/2016/10/04/1169/1169_1475564621565.jpg",
                contentId: 1492,
                comment: "감사합니다.",
                status: "NORMAL",
                likeCount: 2,
                dislikeCount: 0,
                isBest: "N",
                myOpinion: "INDIFFERENT",
                dateCreated: 1487097816000,
                dateUpdated: 1487097816000
            }
        ],
        totalCommentCount: 1
    });
})



router.get('/', function(req, res){
    res.json({result: 1});
});

module.exports = router;