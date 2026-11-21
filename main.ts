f=require("fs")
for(n=5;n;){q="i00"+n--;Z=(g=f.readFileSync("/input/"+q+"/level.txt")+"").search("\n")+1;D={u:-Z,d:Z,l:-1,r:1};A="";B=[]
W=[...g].map((y,x)=>((y=="$"||y=="*")&&B.push(x),(y=="@"||y=="+")&&(P=x),y=="#"||y=="\n"?0:".*+".includes(y)+1))
h=P/Z|0;R=W.map((v,i)=>v&&(i/Z|0)!=h);fl=(p,bl,rg,m={[p]:" "})=>{for(k in D){y=p+D[k];rg[y]&&!bl.includes(y)&&!m[y]&&(m[y]=m[p]+k,fl(y,bl,rg,m))}return m}
while(x=B.find(w=>W[w]<2)){ce=fl(x,[],R);rb=B.filter(w=>ce[w]);vs={};Q=[[rb,P,""]]
for([bs,p,pp]of Q){m=fl(p,pp?bs:B,pp?ce:W);if(bs.every(w=>W[w]>1)){A+=pp;B=B.filter(w=>!rb.includes(w)).concat(bs);P=p;break}
for(b of bs)for(k in D){y=b-D[k];z=b+D[k];m[y]&&ce[z]&&!bs.includes(z)&&(W[z]>1||W[z-Z]&&W[z+Z]||W[z-1]&&W[z+1])&&(v=bs.map(w=>w==b?z:w).sort((a,b)=>a-b),vs[x=v+";"+b]||(vs[x]=1,Q.push([v,b,pp+m[y]+k])))}}}
f.mkdirSync(q="/output/"+q,{recursive:true});f.writeFileSync(q+"/solution.txt",A)}
