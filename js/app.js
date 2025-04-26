$(function() {
  const $cursor = $('#cursor');
  let isInside = true;
  let lastX = window.innerWidth / 2;
  let lastY = window.innerHeight / 2;

  $(document).on('mousemove', function(e) {
    lastX = e.clientX;
    lastY = e.clientY;
    $cursor.css('transform', `translate(${lastX - 10}px, ${lastY - 10}px)`);
    isInside = true;
  });

  $(document).on('mouseleave', function(e) {
    isInside = false;
  });

  $(document).on('mouseenter', function(e) {
    if (!isInside) {
      // マウスが画面に戻ってきたとき、その位置へカーソルをジャンプ
      lastX = e.clientX;
      lastY = e.clientY;
      $cursor.css('transform', `translate(${lastX - 10}px, ${lastY - 10}px)`);
    }
    isInside = true;
  });
});
