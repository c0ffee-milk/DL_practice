import type { Topic } from '../../types';

export const topic15: Topic = {
  id: '15-strings',
  title: '字符串函数',
  order: 15,
  category: 'functions',
  description: '学习 NumPy 的字符串处理函数。',
  content: {
    explanation: `<p>NumPy 提供了以下字符串处理函数（对字符数组进行操作）：</p>
<ul>
<li><strong>add</strong> - 字符串连接</li>
<li><strong>multiply</strong> - 字符串重复</li>
<li><strong>center/capitalize/title/lower/upper</strong> - 格式化</li>
<li><strong>strip</strong> - 去除空白字符</li>
<li><strong>join</strong> - 字符串连接</li>
<li><strong>replace</strong> - 字符串替换</li>
<li><strong>split</strong> - 字符串分割</li>
</ul>`,
    keyPoints: [
      'NumPy 字符串函数在 np.char 模块中',
      '可以对整个字符数组进行批量操作',
      '性能比 Python 字符串操作更高效',
      '常用于文本数据处理'
    ]
  },
  examples: [
    {
      id: 'str-1',
      title: '字符串基本操作',
      description: '字符串连接和大小写转换',
      code: `import numpy as np

arr = np.array(['hello', 'world', 'numpy'])

print("原数组:", arr)
print("大写:", np.char.upper(arr))
print("首字母大写:", np.char.capitalize(arr))
print("连接:", np.char.add(arr, '!'))`,
      expectedOutput: `原数组: ['hello' 'world' 'numpy']
大写: ['HELLO' 'WORLD' 'NUMPY']
首字母大写: ['Hello' 'World' 'Numpy']
连接: ['hello!' 'world!' 'numpy!']`
    }
  ],
  exercises: [
    {
      id: 'str-ex1',
      title: '字符串操作',
      instructions: '将数组中的字符串全部转为大写，并在前面添加 "Hi, "。',
      starterCode: `import numpy as np

names = np.array(['alice', 'bob', 'charlie'])
# 转为大写并添加前缀

print(result)`,
      solution: `import numpy as np

names = np.array(['alice', 'bob', 'charlie'])
upper_names = np.char.upper(names)
result = np.char.add('Hi, ', upper_names)
print(result)`,
      hints: ['使用 np.char.upper() 转大写', '使用 np.char.add() 连接字符串']
    }
  ]
};