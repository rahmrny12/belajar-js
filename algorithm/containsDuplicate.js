var containsDuplicate = function(nums) {
    var distinctValue = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (distinctValue.includes(num)) {
            return true;
        }
        distinctValue.push(num);
    }
    return false;
}