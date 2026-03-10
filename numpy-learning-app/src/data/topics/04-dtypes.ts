import type { Topic } from '../../types';

export const topic04: Topic = {
  id: '04-dtypes',
  title: 'NumPy 数据类型',
  order: 4,
  category: 'basics',
  description: '了解 NumPy 支持的各种数据类型及其用法。',
  content: {
    explanation: `<p>NumPy 支持比 Python 更多种类的数值类型，下表列举了常用 NumPy 基本类型。</p>
<table>
<tr><th>名称</th><th>描述</th></tr>
<tr><td>bool_</td><td>布尔型数据类型（True 或者 False）</td></tr>
<tr><td>int8/int16/int32/int64</td><td>有符号整数类型</td></tr>
<tr><td>uint8/uint16/uint32/uint64</td><td>无符号整数类型</td></tr>
<tr><td>float16/float32/float64</td><td>浮点数类型</td></tr>
<tr><td>complex64/complex128</td><td>复数类型</td></tr>
</table>
<p>数据类型对象（numpy.dtype 类的实例）用来描述与数组对应的内存区域是如何使用。</p>`,
    keyPoints: [
      'NumPy 有比 Python 更丰富的数值类型',
      'dtype 对象描述数组元素类型',
      '创建数组时可指定 dtype 参数',
      '使用 astype() 方法进行类型转换'
    ]
  },
  examples: [
    {
      id: 'dtype-1',
      title: '指定数据类型',
      description: '在创建数组时指定数据类型',
      code: `import numpy as np

# 指定为 float32 类型
a = np.array([1, 2, 3], dtype=np.float32)
print(a)
print(a.dtype)

# 指定为 int64 类型
b = np.array([1, 2, 3], dtype='int64')
print(b.dtype)`,
      expectedOutput: `[1. 2. 3.]
float32
int64`
    },
    {
      id: 'dtype-2',
      title: '类型转换',
      description: '使用 astype() 方法转换数组数据类型',
      code: `import numpy as np

# 创建整数数组
arr = np.array([1, 2, 3, 4])
print("原类型:", arr.dtype)

# 转换为浮点数
float_arr = arr.astype(np.float64)
print("转换后:", float_arr.dtype)
print(float_arr)`,
      expectedOutput: `原类型: int64
转换后: float64
[1. 2. 3. 4.]`
    }
  ],
  exercises: [
    {
      id: 'dtype-ex1',
      title: '创建特定类型数组',
      instructions: '创建一个包含 5 个元素的数组，数据类型为 float32。',
      starterCode: `import numpy as np

# 创建 float32 类型的数组
arr = 
print(arr)
print(arr.dtype)`,
      solution: `import numpy as np

arr = np.array([1.0, 2.0, 3.0, 4.0, 5.0], dtype=np.float32)
print(arr)
print(arr.dtype)`,
      hints: ['使用 dtype=np.float32 参数', '或者使用 dtype="float32"']
    },
    {
      id: 'dtype-ex2',
      title: '布尔类型数组',
      instructions: '创建一个布尔类型的数组，包含 True 和 False 值。',
      starterCode: `import numpy as np

# 创建布尔数组
bool_arr = 
print(bool_arr)
print(bool_arr.dtype)`,
      solution: `import numpy as np

bool_arr = np.array([True, False, True, True], dtype=np.bool_)
print(bool_arr)
print(bool_arr.dtype)`,
      hints: ['使用 np.bool_ 作为 dtype', '或者使用 dtype=bool']
    }
  ]
};