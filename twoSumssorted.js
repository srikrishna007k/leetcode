let twosums = function(nums,target){
    a = new Map();
    for(i=0; i<nums.length;i++){
        let op = target - nums[i];
        if(a.has(op)){
            return[a.get(op)+1,i+1]
        }
        a.set(nums[i], i)
        
    }
    
    return []
}

// ------------------------best_answer-------------------------

var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;

    while (start < end) {
        const sum = numbers[start] + numbers[end];

        if (sum > target) {
            end --;
        } else if (sum < target) {
            start++;
        } else {
            return [start + 1, end + 1];
        }
    }

    return [start + 1, end + 1];
};