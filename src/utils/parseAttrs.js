function parseAttrs(attrStr){
  let obj={},inside=false,key='',value=''
  for(let i=0;i<=attrStr.length;i++){
    if(i===attrStr.length || /\s/.test(attrStr[i])){
      if(!inside|| i===attrStr.length){
        let slimKey=key.trim()
        if(slimKey[slimKey.length-1]==='/'){
          slimKey=slimKey.slice(0,slimKey.length-1)
        }
        if(slimKey){
          obj[slimKey]=value.trim()
        }
        key=''
        value=''
      }
    }else if(attrStr[i]==='"' || attrStr[i]==="'"){
      inside=!inside
      continue
    }else if(attrStr[i]==="="){
      continue
    }
    if(!inside)key+=attrStr[i]
    else value+=attrStr[i]
  }
  return obj
}

// console.log(parseAttrs('td style="abc:left, xyz : center, text-align:   center"'))
module.exports=parseAttrs
