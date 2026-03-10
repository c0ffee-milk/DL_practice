import type { Topic } from '../../types';

export const topic21: Topic = {
  id: '21-copies-views',
  title: '副本和视图',
  order: 21,
  category: 'advanced',
  description: '理解 NumPy 中的浅拷贝、深拷贝和视图的区别。',
  content: {
    explanation: `<p>NumPy 中数组的拷贝分为三种：</p>
<ul>
<li><strong>简单赋值（=）</strong> - 不创建拷贝，只是新引用</li>
<li><strong>视图（view）</strong> - 共享数据，创建新的数组对象</li>
<li><strong>副本（copy）</strong> - 深拷贝，数据和对象都是新的</li>
</ul>
<p><strong>判断方法：</strong></p>
<ul>
<li>view.base 指向原数组，copy.base 为 None</li>
<li>修改 view 会影响原数组，修改 copy 不会</li>
</ul>`,
    keyPoints: [
      '切片操作通常返回视图',
      'view() 明确创建视图',
      'copy() 创建深拷贝',
      '使用 base 属性判断是否共享数据'
    ]
  },
  examples: [
    {
      id: 'copy-1',
      title: '视图 vs 副本',
      description: '比较视图和副本的区别',
      code: `import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6]])

# 创建视图
view = a.view()
print("视图是否为原数组:", view.base is a)

# 创建副本
copy = a.copy()
print("副本是否为原数组:", copy.base is a)

# 修改视图
view[0, 0] = 100
print("\n修改视图后原数组:")
print(a)

# 修改副本
copy[0, 0] = 200
print("\n修改副本后原数组:")
print(a)`,
      expectedOutput: `视图是否为原数组: True
副本是否为原数组: False

修改视图后原数组:
[[100   2   3]
 [  4   5   6]]

修改副本后原数组:
[[100   2   3]
 [  4   5   6]]`
    }
  ],
  exercises: [
    {
      id: 'copy-ex1',
      title: '创建独立副本',
      instructions: '创建一个数组的深拷贝，验证修改拷贝不影响原数组。',
      starterCode: `import numpy as np

original = np.array([1, 2, 3, 4, 5])
# 创建深拷贝


# 修改拷贝
copy[0] = 100

print("原数组:", original)
print("拷贝:", copy)`,
      solution: `import numpy as np

original = np.array([1, 2, 3, 4, 5])
copy = original.copy()

copy[0] = 100

print("原数组:", original)
print("拷贝:", copy)`,
      hints: ['使用 copy() 方法创建深拷贝', '深拷贝与原数组不共享数据']
    }
  ]
};