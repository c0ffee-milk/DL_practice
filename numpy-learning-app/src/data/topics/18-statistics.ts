import type { Topic } from '../../types';

export const topic18: Topic = {
  id: '18-statistics',
  title: '统计函数',
  order: 18,
  category: 'functions',
  description: '学习 NumPy 的统计分析函数。',
  content: {
    explanation: `<p>NumPy 提供了丰富的统计函数：</p>
<ul>
<li><strong>amin/amax</strong> - 最小值/最大值</li>
<li><strong>ptp</strong> - 最大值与最小值之差（极差）</li>
<li><strong>percentile</strong> - 百分位数</li>
<li><strong>median</strong> - 中位数</li>
<li><strong>mean</strong> - 平均值</li>
<li><strong>average</strong> - 加权平均值</li>
<li><strong>std</strong> - 标准差</li>
<li><strong>var</strong> - 方差</li>
</ul>`,
    keyPoints: [
      '统计函数默认对整个数组计算',
      'axis 参数可以指定沿哪个轴计算',
      'keepdims 参数可以保持维度',
      '是数据分析的基础工具'
    ]
  },
  examples: [
    {
      id: 'stat-1',
      title: '基本统计',
      description: '计算数组的基本统计量',
      code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

print("数组:", arr)
print("最小值:", np.amin(arr))
print("最大值:", np.amax(arr))
print("平均值:", np.mean(arr))
print("中位数:", np.median(arr))
print("标准差:", np.std(arr))`,
      expectedOutput: `数组: [ 1  2  3  4  5  6  7  8  9 10]
最小值: 1
最大值: 10
平均值: 5.5
中位数: 5.5
标准差: 2.8722813232690143`
    },
    {
      id: 'stat-2',
      title: '二维数组统计',
      description: '沿不同轴进行统计',
      code: `import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

print("数组:")
print(arr)
print("\n每列平均值:", np.mean(arr, axis=0))
print("每行平均值:", np.mean(arr, axis=1))`,
      expectedOutput: `数组:
[[1 2 3]
 [4 5 6]
 [7 8 9]]

每列平均值: [4. 5. 6.]
每行平均值: [2. 5. 8.]`
    }
  ],
  exercises: [
    {
      id: 'stat-ex1',
      title: '计算统计量',
      instructions: '计算数组的标准差和方差。',
      starterCode: `import numpy as np

arr = np.array([2, 4, 4, 4, 5, 5, 7, 9])

std_dev = 
variance = 

print("标准差:", std_dev)
print("方差:", variance)`,
      solution: `import numpy as np

arr = np.array([2, 4, 4, 4, 5, 5, 7, 9])

std_dev = np.std(arr)
variance = np.var(arr)

print("标准差:", std_dev)
print("方差:", variance)`,
      hints: ['使用 np.std() 计算标准差', '使用 np.var() 计算方差']
    }
  ]
};