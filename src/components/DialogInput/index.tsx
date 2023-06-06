import { HTMLAttributes, PropsWithChildren } from "react"
import styles from "./styles.module.scss"

interface DialogInputProps {
    onEmoji: () => void
}
export const DialogInput = (props: PropsWithChildren<DialogInputProps>) => {

    return <div className={styles.DialogInput}>
        <div className={styles.Tools}>
            <button onClick={props.onEmoji}>
                <svg viewBox="0 0 1024 1024" version="1.1" width="200" height="200">
                    <path d="M964.296223 320.242651c-24.661679-58.328453-59.975976-110.701265-104.950284-155.675572s-97.347119-80.288604-155.675572-104.960517c-60.395532-25.541723-124.536364-38.496779-190.652178-38.496779s-130.256646 12.955056-190.652178 38.496779c-58.328453 24.671912-110.701265 59.986209-155.675572 104.960517s-80.288604 97.347119-104.950284 155.675572c-25.551956 60.395532-38.496779 124.536364-38.496779 190.652178 0 66.10558 12.944823 130.256646 38.496779 190.641945 24.661679 58.328453 59.975976 110.701265 104.950284 155.675572s97.347119 80.288604 155.675572 104.950284c60.395532 25.551956 124.536364 38.496779 190.652178 38.496779s130.256646-12.944823 190.652178-38.496779c58.328453-24.661679 110.701265-59.975976 155.675572-104.950284s80.288604-97.347119 104.950284-155.675572c25.551956-60.385299 38.507012-124.536364 38.507012-190.641945C1002.803235 444.779016 989.848179 380.638183 964.296223 320.242651zM926.597623 685.593663c-22.604834 53.447283-54.972009 101.450577-96.190783 142.679583-41.229007 41.218774-89.232301 73.585949-142.679583 96.190783-55.330166 23.403013-114.108874 35.263132-174.709067 35.263132-60.600193 0-119.378901-11.860119-174.709067-35.263132-53.447283-22.604834-101.450577-54.972009-142.679583-96.190783-41.218774-41.229007-73.585949-89.232301-96.190783-142.679583-23.403013-55.319933-35.263132-114.098641-35.263132-174.698834 0-60.610426 11.860119-119.389134 35.263132-174.709067 22.604834-53.447283 54.972009-101.450577 96.201016-142.679583 41.218774-41.229007 89.222067-73.596182 142.66935-96.201016 55.330166-23.39278 114.108874-35.263132 174.709067-35.263132s119.378901 11.870352 174.709067 35.263132c53.447283 22.604834 101.450577 54.972009 142.679583 96.201016 41.218774 41.229007 73.585949 89.232301 96.190783 142.679583 23.403013 55.319933 35.273365 114.098641 35.273365 174.709067C961.870987 571.495022 950.000636 630.27373 926.597623 685.593663z" p-id="1883"></path><path d="M794.939047 645.214001c-1.115404 1.565658-27.792996 38.568411-75.509764 75.683726-28.110221 21.868053-57.827033 39.315424-88.301092 51.861158-38.455847 15.84078-78.190827 23.863501-118.110001 23.863501s-79.654154-8.022721-118.110001-23.863501c-30.474059-12.545734-60.190871-29.993105-88.301092-51.861158-47.716768-37.115316-74.394361-74.118068-75.509764-75.683726-6.569626-9.18929-4.441149-21.980617 4.758374-28.550243 9.18929-6.559393 21.960151-4.441149 28.54001 4.737908 0.112564 0.163729 6.364965 8.779967 17.999956 21.540595 11.624758 12.760628 28.652574 29.655414 50.326199 46.396703 25.111934 19.412119 51.513234 34.833343 78.456886 45.854351 33.267685 13.599739 67.527976 20.496823 101.839433 20.496823s68.571748-6.897084 101.839433-20.496823c26.943652-11.021008 53.344952-26.442232 78.467119-45.854351 43.337018-33.482579 68.080561-67.599607 68.326155-67.937299 6.579859-9.168824 19.360953-11.276834 28.54001-4.707209C799.369963 623.274316 801.49844 636.024711 794.939047 645.214001z" p-id="1884"></path><path d="M737.449705 449.680653c0 33.799804-27.424606 61.214177-61.203944 61.214177s-61.203944-27.414373-61.203944-61.214177c0-33.810037 27.424606-61.214177 61.203944-61.214177S737.449705 415.870616 737.449705 449.680653z" p-id="1885"></path><path d="M410.974096 449.680653c0 33.799804-27.424606 61.214177-61.203944 61.214177s-61.203944-27.414373-61.203944-61.214177c0-33.810037 27.424606-61.214177 61.203944-61.214177S410.974096 415.870616 410.974096 449.680653z" p-id="1886"></path>
                </svg>
            </button>
            <button>
                <svg viewBox="0 0 1024 1024" version="1.1" width="200" height="200">
                    <path d="M959.872 128l0.128 0.128v767.744l-0.128 0.128H64.128l-0.128-0.128V128.128l0.128-0.128h895.744zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z" p-id="4568"></path><path d="M832 288a96 96 0 1 1-192.064-0.064A96 96 0 0 1 832 288z m64 544H128V704l224-384 256 320h64l224-192z" p-id="4569"></path>
                </svg>
            </button>
        </div>
        <pre contentEditable={true} />
        <div className={styles.Actions}>
            <span>按下Cmd+Enter换行</span>
            <button>发送</button>
        </div>
    </div>
}