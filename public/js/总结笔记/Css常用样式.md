Css常用样式

1.文本超出隐藏，并显示省略号

//超出一行省略号 

overflow: hidden; 

white-space: nowrap;

text-overflow: ellipsis;

//超出两行省略号
 text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;