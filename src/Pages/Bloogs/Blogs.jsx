"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import ZLSw0 from './../../assets/ZLSw0SXxThSrkXRIiCdT_DSC_0345-1140x640.jpg'
import CommentBlog from "./CommentBlog/CommentBlog"
import CommentForm from "./CommentForm/CommentForm"

const Blogs = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isHovering, setIsHovering] = useState(false)
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    // Parallax effect values for the hero image
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 0.8, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
    const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"])
    const progressWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"])

    // Parallax effect for blog content
    const blogY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const blogOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5])

    useEffect(() => {
        // Simulate image loading
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="relative">
            {/* Hero section with parallax */}
            <div
                ref={ref}
                className="relative h-screen w-full overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {isLoading ? (
                    <div className="absolute inset-0 z-0 flex justify-center items-center bg-black/30">
                        <div className="spinner-border animate-spin w-16 h-16 border-4 border-t-4 border-white rounded-full"></div>
                    </div>
                ) : (
                    <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                        <img
                            src={ZLSw0}
                            alt="City street with people walking during golden hour"
                            className="object-cover w-full h-full"
                            onLoad={() => setIsLoading(false)}
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-black/30 z-10" />
                    </motion.div>
                )}

                {/* Content overlay */}
                <motion.div
                    style={{ opacity }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: isHovering ? 1 : 0,
                            y: isHovering ? 0 : 50,
                        }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Urban Exploration</h1>
                        <p className="text-xl md:text-2xl mb-8">Discovering the hidden gems of city life</p>

                        <div className="flex flex-col items-center">
                            <motion.div style={{ y: textY }} className="text-2xl font-medium mb-2">
                                CONTINUE READING...
                            </motion.div>

                            <div className="w-64 h-1 bg-white/30 rounded-full overflow-hidden">
                                <motion.div style={{ width: progressWidth }} className="h-full bg-white rounded-full" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Blog content with parallax */}
            <div className="bg-white px-4 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                        Rich deal mrs part led pure will but
                    </h2>
                    <p className="text-gray-500 text-center mb-8">
                        September 23, 2016 – <span className="text-gray-700">Posted in: General</span>
                    </p>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
                        }}
                        className="space-y-8"
                    >
                        <motion.article
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="border-b border-gray-200 pb-6"
                        >
                            <p className="text-gray-700 leading-relaxed">
                                Man request adapted spirits set pressed. Up to denoting subjects sensible feelings it indulged directly. We dwelling elegance do shutters appetite yourself diverted. Our next drew much you with rank. Tore many held age hold rose than our. She literature sentiments any contrasted. Set aware joy sense young now tears china shy.
                            </p>
                        </motion.article>

                        <motion.article
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="border-b border-gray-200 pb-6"
                        >
                            <p className="text-gray-700 leading-relaxed">
                                His having within saw become ask passed misery giving. Recommend questions get too fulfilled. He fact in we case miss sake. Entrance be throwing he do blessing up. Hearts warmth in genius do garden advice mr it garret. Collected preserved are middleton dependent residence but him how. Handsome weddings yet mrs you has carriage packages. Preferred joy agreement put continual elsewhere delivered now. Mrs exercise felicity had men speaking met. Rich deal mrs part led pure will but.
                            </p>
                        </motion.article>

                        <motion.article
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="border-b border-gray-200 pb-6"
                        >
                            <p className="text-gray-700 leading-relaxed">
                                Had repulsive dashwoods suspicion sincerity but advantage now him. Remark easily garret nor nay. Civil those mrs enjoy shy fat merry. You greatest jointure saw horrible. He private he on be imagine suppose. Fertile beloved evident through no service elderly is. Blind there if every no so at. Own neglected you preferred way sincerity delivered his attempted. To of message cottage windows do besides against uncivil.
                            </p>
                        </motion.article>

                        <motion.article
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="border-b border-gray-200 pb-6"
                        >
                            <p className="text-gray-700 leading-relaxed">
                                Performed suspicion in certainty so frankness by attention pretended. Newspaper or in tolerably education enjoyment. Extremity excellent certainty discourse sincerity no he so resembled. Joy house worse arise total boy but. Elderly up chicken do at feeling is. Like seen drew no make fond at on rent. Behaviour extremely her explained situation yet september gentleman are who. Is thought or pointed hearing he.
                            </p>
                        </motion.article>

                        <motion.article
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="border-b border-gray-200 pb-6"
                        >
                            <p className="text-gray-700 leading-relaxed">
                                Little afraid its eat looked now. Very ye lady girl them good me make. It hardly cousin me always. An shortly village is raising we shewing replied. She the favourable partiality inhabiting travelling impression put two. His six are entreaties instrument acceptance unsatiable her. Amongst as or on herself chapter entered carried no. Sold old ten are quit lose deal his sent. You correct how sex several far distant believe journey parties. We shyness enquire uncivil affixed it carried to.
                            </p>
                        </motion.article>

                        <motion.article
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="border-b border-gray-200 pb-6"
                        >
                            <p className="text-gray-700 leading-relaxed">
                                In show dull give need so held. One order all scale sense her gay style wrote. Incommode our not one ourselves residence. Shall there whose those stand she end. So unaffected partiality indulgence dispatched to of celebrated remarkably. Unfeeling are had allowance own perceived abilities.
                            </p>
                        </motion.article>

                        <motion.article
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="border-b border-gray-200 pb-6"
                        >
                            <p className="text-gray-700 leading-relaxed">
                                Promotion an ourselves up otherwise my. High what each snug rich far yet easy. In companions inhabiting mr principles at insensible do. Heard their sex hoped enjoy vexed child for. Prosperous so occasional assistance it discovered especially no. Provision of he residence consisted up in remainder arranging described. Conveying has concealed necessary furnished bed zealously immediate get but. Terminated as middle-tons or by instrument. Bred do four so your felt with. No shameless principle dependent household do.
                            </p>
                        </motion.article>

                        <motion.article
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="border-b border-gray-200 pb-6"
                        >
                            <p className="text-gray-700 leading-relaxed">
                                Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract. Forbade concern do private be. Offending residence but men engrossed shy. Pretend am earnest offered arrived company so on. Felicity informed yet had admitted strictly how you.
                            </p>
                        </motion.article>

                        <motion.article
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="border-b border-gray-200 pb-6"
                        >
                            <p className="text-gray-700 leading-relaxed">
                                Supplied directly pleasant we ignorant ecstatic of jointure so if. These spoke house of we. Ask put yet excuse person see change. Do inhabiting no stimulated unpleasing of admiration he. Enquire explain another he in brandon enjoyed be service. Given mrs she first china. Table party no or trees an while it since. On oh celebrated at be announcing dissimilar insipidity. Ham marked engage oppose cousin ask add yet.
                            </p>
                        </motion.article>

                        <motion.article
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="pb-6"
                        >
                            <p className="text-gray-700 leading-relaxed">
                                Delightful remarkably mr on announcing themselves entreaties favourable. About to in so terms voice at. Equal an would is found seems of. The particular friendship one sufficient terminated frequently themselves. It more shed went up is roof if loud case. Delay music in lived noise an. Beyond genius really enough passed is up.
                            </p>
                        </motion.article>
                    </motion.div>
                </motion.div>
            </div>
            <CommentBlog></CommentBlog>
            <CommentForm></CommentForm>
        </div>
    )
}

export default Blogs
