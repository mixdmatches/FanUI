import { mount } from '@vue/test-utils'
import { FUpload } from '../index'
import { describe, expect, test, vi } from 'vitest'
import { UploadRawFile } from '../src/upload'

describe('测试 upload 组件', () => {
  // 测试组件是否能正常渲染
  test('渲染', () => {
    const wrapper = mount(FUpload)
    expect(wrapper.exists()).toBe(true)
  })

  // 测试文件上传开始事件
  test('文件上传开始事件', async () => {
    const onStart = vi.fn()
    const wrapper = mount(FUpload, {
      props: {
        onStart
      }
    })

    const mockFile = {
      uid: 1,
      name: 'test.txt',
      size: 1024,
      type: 'text/plain'
    } as UploadRawFile

    const input = wrapper.find('input[type="file"]')
    await input.trigger('change', {
      target: {
        files: [mockFile]
      }
    })

    expect(onStart).toHaveBeenCalledWith(mockFile)
  })

  // 测试文件上传进度事件
  test('文件上传进度事件', async () => {
    const onProgress = vi.fn()
    const wrapper = mount(FUpload, {
      props: {
        onProgress
      }
    })

    const mockFile = {
      uid: 1,
      name: 'test.txt',
      size: 1024,
      type: 'text/plain'
    } as UploadRawFile

    const mockEvent = {
      total: 1024,
      loaded: 512,
      pecetange: 50
    }

    const input = wrapper.find('input[type="file"]')
    await input.trigger('change', {
      target: {
        files: [mockFile]
      }
    })

    // 模拟触发进度事件
    const vm = wrapper.vm as any
    vm.handleProgress(mockEvent, mockFile)

    expect(onProgress).toHaveBeenCalledWith(mockEvent, mockFile)
  })

  // 测试文件上传成功事件
  test('文件上传成功事件', async () => {
    const onSuccess = vi.fn()
    const wrapper = mount(FUpload, {
      props: {
        onSuccess
      }
    })

    const mockFile = {
      uid: 1,
      name: 'test.txt',
      size: 1024,
      type: 'text/plain'
    } as UploadRawFile

    const mockResponse = {
      success: true
    }

    const input = wrapper.find('input[type="file"]')
    await input.trigger('change', {
      target: {
        files: [mockFile]
      }
    })

    // 模拟触发成功事件
    const vm = wrapper.vm as any
    vm.handleSuccess(mockResponse, mockFile)

    expect(onSuccess).toHaveBeenCalledWith(mockResponse, mockFile)
  })

  // 测试文件上传失败事件
  test('文件上传失败事件', async () => {
    const onError = vi.fn()
    const wrapper = mount(FUpload, {
      props: {
        onError
      }
    })

    const mockFile = {
      uid: 1,
      name: 'test.txt',
      size: 1024,
      type: 'text/plain'
    } as UploadRawFile

    const mockError = new Error('上传失败')

    const input = wrapper.find('input[type="file"]')
    await input.trigger('change', {
      target: {
        files: [mockFile]
      }
    })

    // 模拟触发失败事件
    const vm = wrapper.vm as any
    vm.handleError(mockError, mockFile)

    expect(onError).toHaveBeenCalledWith(mockError, mockFile)
  })

  // 测试文件移除事件
  test('文件移除事件', async () => {
    const onRemove = vi.fn()
    const beforeRemove = vi.fn().mockResolvedValue(true)
    const wrapper = mount(FUpload, {
      props: {
        onRemove,
        beforeRemove
      }
    })

    const mockFile = {
      uid: 1,
      name: 'test.txt',
      size: 1024,
      type: 'text/plain'
    } as UploadRawFile

    const input = wrapper.find('input[type="file"]')
    await input.trigger('change', {
      target: {
        files: [mockFile]
      }
    })

    // 模拟触发移除事件
    const vm = wrapper.vm as any
    await vm.handleRemove(mockFile)

    expect(beforeRemove).toHaveBeenCalledWith(mockFile, expect.any(Array))
    expect(onRemove).toHaveBeenCalledWith(mockFile, expect.any(Array))
  })
})
