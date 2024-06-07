import { Modal, ModalContent } from "@nextui-org/react"
import { AiOutlineClose } from "react-icons/ai"
import Icons from "../../components/Icon"
import SocialLinkModal from "./SocialLinkModal"
import { useDisclosure } from "@nextui-org/react"
import { useState } from "react"
const SocialLinkOption = ({ isOpen, onClose,}) => {
    const socials = [
        {
            icon: 'facebook',
            lable: 'Facebook'
        },
        {
            icon: 'instagram',
            lable: 'Instagram'
        },
        {
            icon: 'twitter',
            lable: 'X'
        },
        {
            icon: 'tik-tok',
            lable: 'Tiktok'
        },
        {
            icon: 'thread',
            lable: 'Thread'
        },
        {
            icon: 'whatsapp',
            lable: 'WhatsApp'
        },
    ]
    const {
        isOpen: isOpenVerify,
        onOpen: onOpenVerify,
        onClose: onCloseVerify,
      } = useDisclosure()

      const [isVerify, setVerify] = useState(socials[0])
    const openSocialModal = (index) => {
        setVerify(socials[index])    
        onOpenVerify()    
    }
    return (
        <>
            <Modal
            placement='center'
            size='lg'
            backdrop='blur'
            isOpen={isOpen}
            onClose={onClose}
            hideCloseButton={true}
            className='rounded-none'
            scrollBehavior='outside'
            >
                <ModalContent  className='overflow-visible'>
                    <div className="flex flex-col items-center pt-6 pb-12">
                        <div className='p-2 bg-fuchsia-400 top-[-20px] absolute z-40 -right-2 md:-right-4 cursor-pointer rounded-[100px]'  onClick={onClose}>
                            <AiOutlineClose size={20} color='#fff' />
                        </div>
                        <h4 className="text-center text-sm">Link Your Social Media Accounts</h4>
                        <p className="text-center text-sm">
                            To link any of your social media accounts click on the button below
                        </p>
                        <div className="w-10/12 flex flex-col gap-y-4 pt-6">
                            {socials.map((social, index) => (
                                <div key={index} className="flex items-center gap-x-4 py-4" onClick={() => openSocialModal(index)}>
                                    <Icons type={social.icon} width={20} height={20}/>
                                    <p>Link your {social.lable} account</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ModalContent>
            </Modal>
            {isOpenVerify && (
                 <SocialLinkModal
                    type={isVerify?.lable}
                    icon= {isVerify?.icon}
                    isOpen={isOpenVerify}
                    onClose={onCloseVerify}
                />
            )                
            }
        </>
    )
}
export default SocialLinkOption