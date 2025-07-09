import clsx from 'clsx'
import { useState } from 'react'

import { useLoginMutation } from '@/features/auth/api/use-login.mutation.ts'
import { getOauthRedirectUrl } from '@/features/auth/types/auth-api.types.ts'
import { Button } from '@/shared/components/Button'
import { Dialog, DialogContent, DialogHeader } from '@/shared/components/Dialog'
import { Typography } from '@/shared/components/Typography'

import s from './LoginButtonAndModal.module.css'

const currentDomain = import.meta.env.VITE_CURRENT_DOMAIN

export const LoginButtonAndModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => setIsOpen(true)
  const handleCloseModal = () => setIsOpen(false)

  const { mutate } = useLoginMutation()

  const loginHandler = () => {
    const redirectUri = currentDomain + '/oauth/callback' // todo: to config
    const url = getOauthRedirectUrl(redirectUri)
    window.open(url, 'oauthPopup', 'width=500,height=600')

    const receiveMessage = async (event: MessageEvent) => {
      if (event.origin !== currentDomain) {
        // todo: to config
        return
      }

      const { code } = event.data
      if (code) {
        console.log('✅ code received:', code)
        // тут можно вызвать setToken(accessToken) или dispatch(login)
        //popup?.close()
        window.removeEventListener('message', receiveMessage)
        mutate({ code, accessTokenTTL: '10s', redirectUri, rememberMe: true })
        handleCloseModal()
      }
    }

    window.addEventListener('message', receiveMessage)
  }

  return (
    <>
      <Button variant="primary" onClick={handleOpenModal}>
        Sign in
      </Button>

      <Dialog open={isOpen} onClose={handleCloseModal} className={s.dialog}>
        <DialogHeader />

        <DialogContent className={s.content}>
          <Typography variant="h2">
            Millions of Songs. <br /> Free on Musicfun.
          </Typography>

          <div className={s.icon}>😊</div>

          <Button className={clsx(s.button, s.secondary)} fullWidth onClick={handleCloseModal}>
            Continue without Sign in
          </Button>
          <Button
            as="button"
            target="_blank"
            className={s.button}
            variant="primary"
            fullWidth
            onClick={loginHandler}>
            Sign in with APIHub
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
