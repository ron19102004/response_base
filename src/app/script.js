const listMenu = [
   {
      href: '#',
      title: 'GIỚI THIỆU'
   },
   {
      href: './news_events/page.html',
      title: 'TIN TỨC & SỰ KIỆN'
   },
   {
      href: '#',
      title: 'TUYỂN SINH'
   },
   {
      href: '#',
      title: 'ĐÀO TẠO'
   },
   {
      href: '#',
      title: 'SINH VIÊN'
   },
   {
      href: '#',
      title: 'KHOA HỌC CÔNG NGHỆ'
   },
   {
      href: '#',
      title: 'LIÊN HỆ'
   }
]
const renderListMenu = (listMenu) => {
   let src = '<li class="li "> <img src="../assets/home.png" alt="home-icon" class="w-6"></li>';
   listMenu.forEach(item => {
      src += `
               <li class="li text-white ">
                     <a href="${item.href}">${item.title}</a>
               </li>`
   });
   return src;
}
const refreshFrom = () => {
   $(() => {
      $("#name").val("");
      $("#email").val("");
      $("#tel").val("");
      $("#title").val("");
      $("#content").val("");
      $("#require").val("null");
   })
   alert("Đã thiết lập lại các giá trị ban đầu")
}
$(() => {
   //renderListMenu
   $("#list-menu").html(renderListMenu(listMenu))
   $("#list-menu-mobile").html(renderListMenu(listMenu))
   $("#refreshButton").click((e) => {
      e.preventDefault();
      refreshFrom();
   })
   $("#menu-icon").click(() => {
      $("#responsive-mobile-menu").toggle('slow');
      $("#menu-icon").css({
         display: 'none'
      })
      $("#close-icon").css({
         display: 'block'
      })
   })
   $("#close-icon").click(() => {
      $("#responsive-mobile-menu").toggle('slow');
      $("#close-icon").css({
         display: 'none'
      })
      $("#menu-icon").css({
         display: 'block'
      })
   })
})