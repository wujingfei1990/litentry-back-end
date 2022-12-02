function rootData(data){
    if(!data||!Array.isArray(data)||data.length==0){
        return [];
    }
    data=JSON.parse(JSON.stringify(data));
    let root =data.filter(x=>x.parentId==0);
    if(!root || root.length==0){
        return []
    }
    let children = data.filter(x => x.parentId !== 'undefined' && x.parentId != null)    
    return childNode(children,root);
    
}

function childNode(data,pNode,level=0,name=""){    
    let arr=[];
    pNode.forEach(x=>{
        let pathNames=[]
        if(name!=""){
            if(typeof name=='string'){
                pathNames.push(name)
            }else{
                pathNames=pathNames.concat(name)
            }
            
        }
        let child=data.filter(y=>y.parentId==x.id);
        x.level=x.level||level; 
        pathNames.push(x.name)
        x.pathName=pathNames
        if(child&&child.length!=0){                               
            x.children=childNode(data,child,(x.level+1),x.pathName)
        }
        arr.push(x)
    })
    return arr
}

export default rootData