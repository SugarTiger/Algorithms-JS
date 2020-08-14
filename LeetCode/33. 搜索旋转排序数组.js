/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var n = nums.length;
  var left = 0;
  var right = n - 1;
  while (left <= right) {
    var mid = left + ((right - left) >> 1);
    if (nums[mid] === target) {
      return mid;
    } else {
      if (nums[left] < nums[right]) { // 不包含旋转点，正常的排序查找
        if (nums[mid] > target) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[left] > nums[mid]) { // 旋转点位于left和mid之间，说明 mid到 right之间是正规递增
        // 判断target是否落在mid和right之间
        if (nums[mid] > target || nums[right] < target) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else { // 旋转点位于mid和right之间，说明 left 到 mid之间是正规递增
        // 判断target是否落在left和mid之间
        if (nums[left] > target || nums[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  }
  return -1;
};

search([4, 5, 6, 7, 8, 1, 2, 3], 8);//4
search([4, 5, 6, 7, 0, 1, 2], 4); // 0
search([4, 5, 6, 7, 0, 1, 2], 5); // 1
search([4, 5, 6, 7, 0, 1, 2], 6); // 2
search([4, 5, 6, 7, 0, 1, 2], 7); // 3
search([4, 5, 6, 7, 0, 1, 2], 0); // 4
search([4, 5, 6, 7, 0, 1, 2], 1); // 5
search([4, 5, 6, 7, 0, 1, 2], 2); // 6
search([4, 5, 6, 7, 0, 1, 2], 3); // -1
search([7, 0, 1, 2, 4, 5, 6,], 7); // 0
search([7, 0, 1, 2, 4, 5, 6,], 0); // 1
search([7, 0, 1, 2, 4, 5, 6,], 1); // 2
search([7, 0, 1, 2, 4, 5, 6,], 2); // 3
search([7, 0, 1, 2, 4, 5, 6,], 4); // 4
search([7, 0, 1, 2, 4, 5, 6,], 5); // 5
search([7, 0, 1, 2, 4, 5, 6,], 6); // 6
search([7, 0, 1, 2, 4, 5, 6,], 3); // -1