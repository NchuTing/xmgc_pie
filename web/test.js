$('#shangchuan').click(function() {
    _fns.uploadFile2($('#shangchuan'), function(f) {
        console.log('>>>before:', f);
    }, function(f) {
        console.log('>>>process:', f);
        $('#wancheng').css('width',f.percent+'%');
        $('#wancheng').html(f.percent);
    }, function(f) {
        console.log('>>>success:', f);
    }, function(f) {
        console.log('>>>abort:', f);
    }, function(f) {
        console.log('>>>error:', f);
    }, function(f) {
        console.log('>>>complete:', f);
    });

})


$('#shangchuan2').click(function() {
    _fns.uploadFile('test-1',$('#shangchuan2'), function(f) {
        console.log('>>>before:', f);
    }, function(f) {
        console.log('>>>process:', f);
        $('#wancheng').css('width',f.percent+'%');
        $('#wancheng').html(f.percent);
    }, function(f) {
        console.log('>>>success:', f);
    }, function(f) {
        console.log('>>>abort:', f);
    }, function(f) {
        console.log('>>>error:', f);
    }, function(f) {
        console.log('>>>complete:', f);
    });

})
