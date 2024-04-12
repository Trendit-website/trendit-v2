import { forwardRef, useRef } from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../utilities/data'

const OtpPinInput = forwardRef(
  (
    { value, onChange, disabled, length = 6, native = false, error, ...props },
    ref
  ) => {
    const parent = useRef(null)

    const focusLast = () => {
      const el = [...parent.current.children].find((child) => !child.value)
      if (!el) return [...parent.current.children].at(-1).focus()
      el.focus()
    }

    const triggerChange = (v) => {
      if (v.length > 6) return
      onChange(native ? { target: { value: v } } : v)
      setTimeout(() => focusLast(), 10)
    }

    const handleKeydown = (e) => {
      if (e.key.toLowerCase() === 'backspace') {
        triggerChange(`${(value || '').replace(/.$/, '')}`)
      }
      if (e.key.match(/^\d$/)) {
        triggerChange(`${value || ''}${e.key}`)
      }
    }

    const handlePaste = (e) => {
      const paste = e.clipboardData.getData('text')
      const v = paste.slice(0, length)
      triggerChange(v)
    }

    return (
      <div>
        <div
          ref={parent}
          className='grid w-full grid-cols-6 gap-2 md:gap-4'
          {...props}
        >
          {Array(length)
            .fill(null)
            .map((_, i) => (
              <input
                maxLength='1'
                disabled={disabled}
                key={i}
                data-index={i}
                value={value?.[i] || ''}
                onChange={() => null}
                onKeyDown={handleKeydown}
                onPaste={handlePaste}
                ref={i === 0 ? ref : null}
                className={cn(
                  "grow shrink basis-0 text-center rounded-lg w-12 h-12 bg-[#B1B1B1] text-black text-opacity-50 text-[12.83px] font-normal font-['Campton'] tracking-[10.39px]",
                  { 'pointer-events-none opacity-60': disabled }
                )}
                // className={cn(
                //   'inline-flex rounded-3xl border border-default-300 bg-transparent px-2 py-4 text-center text-xl focus:ring focus:ring-primary-100 sm:px-2 sm:py-5',
                //   { 'pointer-events-none opacity-60': disabled }
                // )}
              />
            ))}
        </div>
        {!!error && (
          <div className='mt-3 px-1 text-sm text-red-500'>{error}</div>
        )}
      </div>
    )
  }
)

OtpPinInput.displayName = 'OtpPinInput'

OtpPinInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  length: PropTypes.number,
  onDone: PropTypes.func,
  native: PropTypes.bool,
  error: PropTypes.string,
}

export default OtpPinInput
