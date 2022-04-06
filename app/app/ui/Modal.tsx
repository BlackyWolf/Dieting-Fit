import { Fragment, PropsWithChildren, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PrimaryButton, SecondaryButton } from './buttons';

type VoidFunction = () => void;
type VoidPromise = () => Promise<void>;

type VoidOrPromise = VoidFunction | VoidPromise;

type Properties = PropsWithChildren<{
    cancel?: string;
    confirm?: string;
    onClose?: VoidOrPromise;
    onConfirm?: VoidOrPromise;
    title?: string;
    visible?: boolean;
}>;

export const Modal = ({
    cancel = 'Close',
    children,
    confirm = 'Ok',
    onClose,
    onConfirm,
    title,
    visible = false
}: Properties) => {
    let [isOpen, setIsOpen] = useState(visible)

    function closeModal() {
        if (onClose) {
            Promise.resolve(onClose()).then(() => setIsOpen(false));
        } else {
            setIsOpen(false);
        }
    }

    function confirmModal() {
        if (onConfirm) {
            Promise.resolve(onConfirm()).then(() => setIsOpen(false));
        } else {
            setIsOpen(false);
        }
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal}
            >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            {title && (
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    {title}
                                </Dialog.Title>
                            )}

                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    {children}
                                </p>
                            </div>

                            <div className="mt-4">
                                {onConfirm && (
                                    <PrimaryButton type="button" onClick={confirmModal}>
                                        {confirm}
                                    </PrimaryButton>
                                )}

                                <SecondaryButton type="button" onClick={closeModal}>
                                    {cancel}
                                </SecondaryButton>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}
