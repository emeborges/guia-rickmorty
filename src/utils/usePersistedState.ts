import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { parseCookies, setCookie } from 'nookies'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedState<T>(key: string, initialState: any): Response<T> {
  const [state, setState] = useState(() => {
    const { theme } = parseCookies()

    if (theme) {
      return JSON.parse(theme)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    setCookie(undefined, 'theme', JSON.stringify(state), {})
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
