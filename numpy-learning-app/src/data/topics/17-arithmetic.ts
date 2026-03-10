import type { Topic } from '../../types';

export const topic17: Topic = {
  id: '17-arithmetic',
  title: '算术函数',
  order: 17,
  category: 'functions',
  description: '学习 NumPy 的算术运算函数。',
  content: {
    explanation: `<p>NumPy 提供了以下算术函数：</p>
<ul>
<li><strong>add</strong> - 相加</li>
<li><strong>subtract</strong> - 相减</li>
<li><strong>multiply</strong> - 相乘</li>
<li><strong㻝ivide</strong> - 相除</li>
<li><strong>power</strong> - 幂运算</li>
<li><strong>mod/remainder</strong> - 取模</li>
<li><strong>reciprocal</strong> - 倒数</li>
</ul>`,
    keyPoints: [
      '算术函数可以直接使用运算符 + - * / ** %',
      '函数形式支持更多的参数选项',
      'out 参数可以指定输出数组',
      '支持广播机制'
    ]
  },
  examples: [
    {
      id: 'arith-1',
      title: '基本算术运算',
      description: '使用算术函数',
      code: `import numpy as np

a = np.array([10, 20, 30, 40])
b = np.array([2, 4, 5, 8])

print("a:", a)
print("b:", b)
print("a + b:", np.add(a, b))
print("a - b:", np.subtract(a, b))
print("a * b:", np.multiply(a, b))
print("a / b:", np.divide(a, b))
print("a ** 2:", np.power(a, 2))`,
      expectedOutput: `a: [10 20 30 40]
b: [2 4 5 8]
a + b: [12 24 35 48]
a - b: [ 8 16 25 32]
a * b: [ 20  80 150 320]
a / b: [5. 5. 6. 5.]
a ** 2: [ 100  400  900 1600]`
    }
  ],
  exercises: [
    {
      id: 'arith-ex1',
      title: '算术运算',
      instructions: '计算两个数组的乘积和和。',
      starterCode: `import numpy as np

a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

# 计算乘积
product = 
# 计算和
sum_result = 

print("乘积:", product)
print("和:", sum_result)`,
      solution: `import numpy as np

a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

product = np.multiply(a, b)
sum_result = np.add(a, b)

print("乘积:", product)
print("和:", sum_result)`,
      hints: ['使用 np.multiply() 计算乘积', '使用 np.add() 计算和']
    }
  ]
};