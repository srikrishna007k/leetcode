function threesums(nums,target){
    let a =[];
    outloop:for(i in nums){
        let b =  nums.slice()
        for(j in b){
            b.splice(i,1);
            let c = b.slice();
            for(k in c){
                c. splice(j,1);
                if(nums[i]+b[j]+c[k]==target){
                    let p = nums.indexOf(nums[i]);
                    let q =b.indexOf(b[j])+1;
                    let r = c.indexOf(c[j])+2;
                    a.push(p);
                    a.push(q);
                    a.push(r);
                    break outloop;

                }
                c.splice(k,0,nums[j])
            }
            b.splice(i,0,nums[i]);
        }
        
    }
    
    return a;
}

let nums = [1,2,3,7];
let target = 6;
console.log(threesums(nums,target));
